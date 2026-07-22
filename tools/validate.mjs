import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const packsRoot = path.join(root, "packs");
const requiredDocs = [
  "README.md", "DESIGN.md", "DOMAIN.md", "FLOWS.md", "STATES.md",
  "PERMISSIONS.md", "COMPLIANCE.md", "CONTENT.md"
];
const requiredStates = ["loading", "empty", "error", "permission-denied", "stale-or-partial", "offline-or-reconnecting"];
const riskValues = new Set(["low", "moderate", "high", "critical"]);
const densityValues = new Set(["comfortable", "balanced", "compact", "adaptive"]);
const errors = [];
const warnings = [];

function fail(file, message) {
  errors.push(`${path.relative(root, file)}: ${message}`);
}

function warn(file, message) {
  warnings.push(`${path.relative(root, file)}: ${message}`);
}

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

function isDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

async function validatePack(dirent) {
  const packDir = path.join(packsRoot, dirent.name);
  const manifestFile = path.join(packDir, "manifest.json");
  let manifest;
  try {
    manifest = JSON.parse(await readFile(manifestFile, "utf8"));
  } catch (error) {
    fail(manifestFile, `cannot parse manifest (${error.message})`);
    return null;
  }

  const requiredFields = ["$schema", "schema_version", "id", "name", "version", "summary", "domain", "risk_level", "density", "surfaces", "audiences", "locales", "accessibility_target", "required_documents", "coverage", "provenance"];
  for (const field of requiredFields) if (!(field in manifest)) fail(manifestFile, `missing field '${field}'`);

  if (manifest.schema_version !== "1.0") fail(manifestFile, "schema_version must be 1.0");
  if (manifest.$schema !== "../../schema/design-pack.schema.json") fail(manifestFile, "$schema must point to ../../schema/design-pack.schema.json");
  if (manifest.id !== dirent.name) fail(manifestFile, `id '${manifest.id}' must match directory '${dirent.name}'`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest.id ?? "")) fail(manifestFile, "id must be lower kebab-case");
  if (!/^\d+\.\d+\.\d+$/.test(manifest.version ?? "")) fail(manifestFile, "version must use semantic versioning");
  if (!riskValues.has(manifest.risk_level)) fail(manifestFile, "invalid risk_level");
  if (!densityValues.has(manifest.density)) fail(manifestFile, "invalid density");
  if (!Array.isArray(manifest.audiences) || manifest.audiences.length === 0) fail(manifestFile, "audiences must not be empty");
  if (!Array.isArray(manifest.required_documents)) fail(manifestFile, "required_documents must be an array");

  for (const doc of requiredDocs) {
    if (!manifest.required_documents?.includes(doc)) fail(manifestFile, `required_documents must include ${doc}`);
  }
  for (const doc of manifest.required_documents ?? []) {
    if (!await exists(path.join(packDir, doc))) fail(manifestFile, `listed document '${doc}' does not exist`);
  }
  if (!await exists(path.join(packDir, "tokens.json"))) fail(manifestFile, "tokens.json is required");

  const states = manifest.coverage?.states ?? [];
  for (const state of requiredStates) if (!states.includes(state)) fail(manifestFile, `coverage.states must include '${state}'`);
  if ((manifest.coverage?.scenarios?.length ?? 0) < 2) fail(manifestFile, "at least two scenarios are required");

  if (!Array.isArray(manifest.provenance) || manifest.provenance.length === 0) fail(manifestFile, "at least one provenance record is required");
  for (const [index, source] of (manifest.provenance ?? []).entries()) {
    if (!isDate(source.reviewed_at ?? "")) fail(manifestFile, `provenance[${index}].reviewed_at must be YYYY-MM-DD`);
    try { new URL(source.url); } catch { fail(manifestFile, `provenance[${index}].url is invalid`); }
    if (!new Set(["primary", "research", "recommendation"]).has(source.source_type)) fail(manifestFile, `provenance[${index}].source_type is invalid`);
    if (!new Set(["low", "medium", "high"]).has(source.confidence)) fail(manifestFile, `provenance[${index}].confidence is invalid`);
  }

  for (const doc of manifest.required_documents ?? []) {
    const file = path.join(packDir, doc);
    if (!await exists(file)) continue;
    const body = await readFile(file, "utf8");
    if (/\bTODO\b/.test(body)) fail(file, "published packs must not contain TODO markers");
    if (!/^#\s+\S/m.test(body)) fail(file, "document must have an H1 title");
    if (body.trim().length < 300) warn(file, "document is unusually short");
  }

  const evalDir = path.join(packDir, "evals");
  const evalFiles = await readdir(evalDir).catch(() => []);
  if (evalFiles.filter((name) => name.endsWith(".json")).length === 0) fail(evalDir, "at least one JSON evaluation case is required");
  for (const name of evalFiles.filter((name) => name.endsWith(".json"))) {
    const file = path.join(evalDir, name);
    try {
      const test = JSON.parse(await readFile(file, "utf8"));
      for (const field of ["id", "scenario", "role", "task", "expected_states", "assertions", "forbidden_outcomes"]) {
        if (!(field in test)) fail(file, `missing field '${field}'`);
      }
      if ((test.assertions?.length ?? 0) < 3) fail(file, "at least three assertions are required");
      if ((test.forbidden_outcomes?.length ?? 0) < 1) fail(file, "at least one forbidden outcome is required");
    } catch (error) {
      fail(file, `cannot parse evaluation (${error.message})`);
    }
  }

  try {
    const tokens = JSON.parse(await readFile(path.join(packDir, "tokens.json"), "utf8"));
    for (const group of ["color", "space", "radius", "type"]) if (!tokens[group]) fail(path.join(packDir, "tokens.json"), `missing token group '${group}'`);
    for (const [name, value] of Object.entries(tokens.color ?? {})) {
      if (!/^#[0-9a-f]{6}$/i.test(value)) fail(path.join(packDir, "tokens.json"), `color '${name}' must be a six-digit hex value`);
    }
  } catch (error) {
    fail(path.join(packDir, "tokens.json"), `cannot parse tokens (${error.message})`);
  }

  return manifest;
}

try {
  JSON.parse(await readFile(path.join(root, "schema", "design-pack.schema.json"), "utf8"));
} catch (error) {
  errors.push(`schema/design-pack.schema.json: cannot parse schema (${error.message})`);
}

const entries = (await readdir(packsRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
if (entries.length === 0) errors.push("packs: no packs found");
const manifests = (await Promise.all(entries.map(validatePack))).filter(Boolean);
const duplicateIds = manifests.map((item) => item.id).filter((id, index, all) => all.indexOf(id) !== index);
for (const id of new Set(duplicateIds)) errors.push(`packs: duplicate pack id '${id}'`);

for (const message of warnings) console.warn(`WARN  ${message}`);
for (const message of errors) console.error(`ERROR ${message}`);
if (errors.length) {
  console.error(`\nValidation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}
console.log(`Validated ${manifests.length} pack(s) with ${warnings.length} warning(s).`);
