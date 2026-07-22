# Data Freshness Indicator

## Context and anatomy

Attach freshness to any price, valuation, limit, or status that can become unsafe when old. Show source class, exact timestamp, age, quality state, and affected actions.

## Behavior and states

Freshness thresholds come from product policy. The indicator changes from current to delayed, stale, or unavailable without removing the last known value. Values retained for context are visibly separated from live values. Reconnection does not mark data current until a new authoritative update arrives.

## Accessibility and anti-patterns

Use text and an icon in addition to color. Announce only threshold transitions. Never place one global “live” badge over regions fed by different sources, and never reset age merely because the page rerendered.
