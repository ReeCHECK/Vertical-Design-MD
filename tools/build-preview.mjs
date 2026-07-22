import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const packsRoot = path.join(root, "packs");
const output = path.join(root, "site", "index.html");

const escapeHtml = (value = "") => String(value).replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);

const dirs = (await readdir(packsRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
const packs = await Promise.all(dirs.map(async ({ name }) => {
  const dir = path.join(packsRoot, name);
  return {
    manifest: JSON.parse(await readFile(path.join(dir, "manifest.json"), "utf8")),
    tokens: JSON.parse(await readFile(path.join(dir, "tokens.json"), "utf8"))
  };
}));

const cards = packs.map(({ manifest, tokens }) => {
  const colors = Object.entries(tokens.color).slice(0, 8).map(([name, value]) => `<li title="${escapeHtml(name)}: ${escapeHtml(value)}" style="--swatch:${escapeHtml(value)}"><span></span><small>${escapeHtml(name)}</small></li>`).join("");
  const scenarios = manifest.coverage.scenarios.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  return `<article class="card">
    <header><div><p>${escapeHtml(manifest.domain)}</p><h2>${escapeHtml(manifest.name)}</h2></div><b class="risk risk-${escapeHtml(manifest.risk_level)}">${escapeHtml(manifest.risk_level)} risk</b></header>
    <p class="summary">${escapeHtml(manifest.summary)}</p>
    <div class="meta"><span>${escapeHtml(manifest.density)} density</span><span>${escapeHtml(manifest.accessibility_target)}</span><span>v${escapeHtml(manifest.version)}</span></div>
    <ul class="swatches">${colors}</ul>
    <h3>Covered scenarios</h3><div class="chips">${scenarios}</div>
    <footer>${manifest.audiences.map(escapeHtml).join(" · ")}</footer>
  </article>`;
}).join("\n");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vertical Design MD Catalog</title>
<style>
:root{color-scheme:dark;--bg:#0a0d12;--panel:#111722;--line:#263042;--text:#f4f7fb;--muted:#9ba8ba;--accent:#7dd3fc}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 20% 0,#17243a 0,transparent 32rem),var(--bg);color:var(--text);font:15px/1.5 Inter,ui-sans-serif,system-ui,sans-serif}main{width:min(1180px,calc(100% - 32px));margin:auto;padding:72px 0}nav{color:var(--accent);font-weight:700;letter-spacing:.08em;text-transform:uppercase}h1{font-size:clamp(42px,8vw,88px);line-height:.96;letter-spacing:-.06em;margin:18px 0 24px;max-width:900px}.lead{font-size:19px;color:var(--muted);max-width:720px;margin-bottom:48px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:18px}.card{background:color-mix(in srgb,var(--panel) 92%,transparent);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 16px 48px #0005}.card header{display:flex;justify-content:space-between;gap:20px;align-items:flex-start}.card header p{margin:0;color:var(--accent);font-size:12px;text-transform:uppercase;letter-spacing:.12em}.card h2{margin:3px 0 0;font-size:25px;letter-spacing:-.03em}.risk{white-space:nowrap;padding:5px 9px;border-radius:999px;font-size:11px;text-transform:uppercase}.risk-high,.risk-critical{background:#4a1420;color:#ffb4c0}.risk-moderate{background:#4b350f;color:#fde68a}.risk-low{background:#123c2d;color:#a7f3d0}.summary{color:var(--muted);min-height:68px}.meta,.chips{display:flex;flex-wrap:wrap;gap:7px}.meta span,.chips span{border:1px solid var(--line);border-radius:7px;padding:5px 8px;font-size:12px}.swatches{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0;margin:24px 0;list-style:none}.swatches li{min-width:0}.swatches li span{display:block;height:42px;background:var(--swatch);border-radius:7px;border:1px solid #ffffff25}.swatches small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted);margin-top:4px}.card h3{font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-top:22px}.card footer{border-top:1px solid var(--line);margin-top:22px;padding-top:16px;color:var(--muted);font-size:12px}@media(max-width:600px){main{padding-top:40px}.grid{grid-template-columns:1fr}.card{padding:20px}}
</style></head><body><main><nav>Open specification · ${packs.length} reference packs</nav><h1>Design for the domain, not just the screenshot.</h1><p class="lead">A generated catalog of professional design packs combining visual systems with workflows, permissions, risk controls, states, and evaluation cases.</p><section class="grid">${cards}</section></main></body></html>`;

await writeFile(output, html, "utf8");
console.log(`Built ${path.relative(root, output)} with ${packs.length} pack(s).`);
