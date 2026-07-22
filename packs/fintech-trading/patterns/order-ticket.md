# Risk-Aware Order Ticket

## Context and anatomy

Use for creating or changing an order. Required regions are account/instrument context, market freshness, order fields, live validation, calculated impact, material warnings, review action, and authoritative result.

## Behavior and states

Changing a material field invalidates prior calculations. The submit path is `edit → review → submit → authoritative result`. Stale market data, expired permissions, insufficient limits, uncertain submission, and market closure each have distinct behavior. Draft values survive correctable errors but are cleared or revalidated when account or instrument changes.

## Accessibility

Every input has a persistent visible label, unit, error relationship, and keyboard path. Calculated changes are announced once after input settles, not on every keystroke. Buy/sell state is expressed in text and not only color.

## Anti-patterns

Do not preselect a risky side based on the previous instrument. Do not hide fees or warnings behind a tooltip at review. Do not offer a second submit button while the first request is unresolved.
