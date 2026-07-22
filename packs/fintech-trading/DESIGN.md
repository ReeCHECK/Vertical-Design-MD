# Fintech Trading Visual Contract

## Principles

Optimize for scan speed, numeric comparison, and visible uncertainty. Market state, data freshness, order status, and account scope remain visible while the user acts. Density is compact but never achieved by removing labels, units, focus indicators, or risk explanations.

Color is redundant with a word, sign, icon, or shape. Positive and negative colors describe movement only; they do not silently mean “safe” and “dangerous.” The primary action color is reserved for the next valid action. Critical color is reserved for blocking risk, rejected orders, and destructive consequences.

## Layout and hierarchy

Desktop uses a stable three-region grid: market context, central data/position view, and order ticket. The ticket remains 320–400px wide and never overlays the instrument identity or freshness indicator. Tables use tabular numerals, right-aligned quantitative columns, sticky headers, and a density switch that preserves the same information.

The first reading line is instrument, venue, session state, last update, account, and buying power. High-volatility or delayed-data notices sit directly below it. Secondary charts never displace order status or risk information.

## Components

- **Instrument header:** symbol, full name, venue, currency, session, timestamp, and delayed/realtime badge.
- **Order ticket:** side, type, quantity, price or trigger, time in force, estimated value, fees when known, buying-power effect, validation, and submit action.
- **Market table:** sortable labeled columns, numeric alignment, timestamp provenance, and stale-row treatment.
- **Position row:** quantity, average price, current price, unrealized result, exposure, and available actions.
- **Order timeline:** client request, acknowledged, partial fill, fill, cancel pending, canceled, rejected, or unknown.

## Interaction and accessibility

Keyboard order follows visual task order. Numeric inputs accept direct entry and documented increments; arrow keys never cause large hidden jumps. Focus is a 2px high-contrast outline and is never replaced by color-only glow. Dynamic order updates use a restrained live region; high-frequency ticks are not announced individually. Tables expose headers and allow a linear alternative for narrow screens.

Motion is limited to acknowledgement and state transition. Price flashes last no more than 500ms and are accompanied by signed values. At reduced motion, flashes become a static border change.

## Responsive behavior

Below 1024px, context remains above tabs and the order ticket becomes a dedicated step, not a narrow overlay. Mobile supports review and low-complexity actions only when the product policy allows it. Dense multi-column comparison may switch to labeled rows without hiding units or timestamps.

## Non-goals

This file does not define execution policy, suitability, risk limits, market rules, regulatory disclosures, fee calculation, or authorization. Those rules must come from trusted product services and reviewed policy documents.
