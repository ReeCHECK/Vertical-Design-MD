# Governed Bulk Action

## Context and anatomy

Use when one action targets multiple records. Required regions are selection scope, eligibility, exclusions, consequence, review, execution progress, cancellation policy, and durable per-item results.

## Behavior and states

Selection explicitly distinguishes rows, page, and all matches. Review freezes IDs or declares execution-time query behavior. Scope changes invalidate review. Execution creates a job with progress and partial outcomes; safe retry creates a new job over eligible failures only.

## Accessibility and anti-patterns

Selection changes are announced with count and scope. Progress is available as text and is not color-only. Never infer `all results` from a page checkbox, hide exclusions in a tooltip, or reduce partial failure to a green success toast.
