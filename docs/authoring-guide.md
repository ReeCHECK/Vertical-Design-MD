# Authoring Guide

## 1. Frame the scenario

Start with a bounded job, not an industry label. “Approve a high-value transfer as a risk analyst” is useful; “fintech UI” is not. Record the role, decision, consequence, device, time pressure, data density, and failure modes.

## 2. Separate evidence from design decisions

Add primary sources to `manifest.json.provenance`. Use `high` confidence only for stable primary material or verified product behavior. Recommendations created by the pack authors should use `source_type: recommendation` and should not be presented as regulatory requirements.

## 3. Model before styling

Write `DOMAIN.md`, `FLOWS.md`, and `PERMISSIONS.md` before `DESIGN.md`. If the object and transition model is unclear, a polished screen will amplify the ambiguity.

## 4. Design all states

For every primary data region and action, answer: What appears before data arrives? What if there is no data? What if only some data arrives? How old may data be? What happens when submission times out? What can the current role not see or do?

## 5. Make dangerous actions unmistakable

Confirmation should restate the object, scope, consequence, and reversibility. Do not normalize risky actions by making them visually identical to routine actions. Never depend on the frontend to enforce permissions.

## 6. Write evaluation cases

An evaluation should be falsifiable. Prefer “the order button is disabled when market data is stale and the reason remains visible” over “the page feels safe.” Include forbidden outcomes to catch plausible but harmful AI output.

## 7. Validate and preview

Run `npm test`, inspect `site/index.html`, and review the generated pack with a designer, engineer, accessibility specialist, and a domain expert proportional to risk.
