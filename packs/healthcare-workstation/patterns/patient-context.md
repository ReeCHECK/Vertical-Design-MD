# Persistent Patient Context

## Context and anatomy

Use on every patient-specific screen. Include policy-approved identifiers, encounter/location, identity verification/conflict, critical sensitivities, and active restrictions. The bar is visually stable and cannot be replaced by a browser title or breadcrumb.

## Behavior and states

Changing patient or encounter requires explicit confirmation when work is unsigned. An identity conflict switches the entire workspace to a protected resolution state. Partial demographics never imply a confirmed match.

## Accessibility and anti-patterns

Expose identity as a named landmark and make critical warnings keyboard reachable. Do not rely on photographs, color bands, room number, or a single identifier to establish identity. Do not expose more personal data than the workflow requires.
