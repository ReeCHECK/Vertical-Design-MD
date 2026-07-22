# Contributing

Thank you for improving Vertical Design MD.

Participation is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). General questions belong in [Discussions](https://github.com/ReeCHECK/Vertical-Design-MD/discussions); reproducible defects belong in Issues; security concerns must be reported privately as described in [SECURITY.md](SECURITY.md).

## Before opening a pull request

1. Open an issue for a new domain pack or a breaking specification change.
2. Do not include third-party logos, proprietary fonts, screenshots, or copied design-system text.
3. Distinguish researched facts from recommendations and record both in `manifest.json.provenance`.
4. Add or update at least one scenario in `evals/`.
5. Run `npm test` and include the result in the pull request.

## Quality bar

A reference pack must define roles, core objects, invariants, at least two workflows, permissions, edge states, content rules, risk controls, tokens, and evaluation cases. Regulated-domain claims require a stable primary source and a review date. A source proves where a claim came from; it does not make the pack certified.

## Pull request checklist

- [ ] `npm test` passes.
- [ ] No `TODO` markers remain in a published pack.
- [ ] All required documents are present.
- [ ] Provenance includes `reviewed_at`, URL, and confidence.
- [ ] Dangerous and irreversible actions have explicit confirmation behavior.
- [ ] Loading, empty, error, stale/partial, and permission-denied behavior is defined.
- [ ] English is the canonical pack language; localized companion documents are welcome.

By contributing, you agree that your contribution is licensed under the MIT License.
