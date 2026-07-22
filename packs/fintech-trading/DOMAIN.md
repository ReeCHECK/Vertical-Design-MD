# Fintech Trading Domain Model

## Actors

- **Trader:** creates, reviews, amends, and cancels orders within assigned accounts and limits.
- **Risk analyst:** reviews exposure, blocks or releases restricted actions, and investigates exceptions.
- **Operations reviewer:** reconciles acknowledgements, fills, breaks, and uncertain submissions.
- **Observer:** views permitted market, order, and position data without mutation capability.

## Core objects

- **Instrument:** stable identifier, display symbol, venue, asset class, quote currency, tick size, lot size, and trading status.
- **Market datum:** value, source, event timestamp, receipt timestamp, and quality/freshness status.
- **Order:** immutable identity plus account, instrument, side, type, quantity, prices, time in force, state, and audit metadata.
- **Execution:** filled quantity, price, venue, timestamp, and linkage to an order.
- **Position:** account/instrument quantity, cost basis, currency, valuation timestamp, and exposure.
- **Account scope:** legal account, permissions, limits, buying power, and applicable policy set.

## Terms and units

“Last” is the last reported trade, not a guaranteed executable price. “Market value” and “buying power” are estimates unless a trusted service marks them final. Quantity always names its unit. Prices always name quote currency. Timestamps identify timezone or use an explicitly labeled exchange time.

## Invariants

1. Account and instrument identity remain visible from entry through confirmation.
2. An order cannot be represented as accepted until an authoritative acknowledgement exists.
3. A timeout creates an unknown outcome, not an automatic failure; the UI must prevent blind duplicate submission.
4. Market data always carries freshness and source status.
5. Signed values include a sign and textual direction where color is used.
6. Display rounding never changes the value submitted to the execution service.
7. Permissions and limits are enforced by trusted backend systems, not visual control state.
