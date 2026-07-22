# Enterprise Operations Content Rules

## Terminology

Use the domain’s object name instead of generic `item` in product copy. Status labels describe observable workflow state, not vague sentiment. `Resolved` and `closed` are separate when reopening or verification differs.

## Scope and counts

Every count identifies scope: `24 selected on this page`, `2,418 matching current filters`, or `17 eligible for retry`. Do not say `all` without naming the population. Selection, result, and export counts use locale-aware formatting.

## Time and SLA

Show timezone at queue level. Relative age is paired with exact time. SLA copy identifies due/overdue status and policy name when multiple calendars exist; the client does not infer deadlines independently.

## Warnings and confirmation

Use condition–consequence–action structure: `312 records match this action. 18 cannot be changed because they are locked. Review exclusions before starting.` Destructive confirmation names object, scope, effect, reversibility, and expected duration.

## Localization

Allow expansion in table headers and buttons without truncating status or units. Search and sorting behavior documents locale sensitivity. Bidirectional layout mirrors structure but preserves IDs, code, and appropriate timeline direction.
