# Fintech Trading Workflows

## Review market and submit order

Entry requires a selected account, instrument, visible market/session status, and current permission result. The trader selects side and type, enters quantity and conditional prices, and receives inline validation. The review step restates account, instrument, side, type, quantity, price logic, time in force, estimated value, known fees, market-data age, and major warnings.

Submitting creates a locally locked pending state with an idempotency key. Authoritative acknowledgement moves the order to accepted or rejected. A timeout moves to `submission-uncertain`; the same action cannot be blindly repeated. The user may inspect status or initiate a controlled reconciliation action.

## Amend or cancel order

Only eligible states expose amend/cancel. The dialog restates remaining quantity and explains that fills may occur while cancellation is pending. After submission, the prior order remains visible with `cancel pending` or `amend pending`. The UI never labels the order canceled until confirmed by the authoritative service.

## Monitor position risk

The user selects account scope and sees positions with valuation time, exposure, limits, and exceptions. Changing filters never changes the account scope silently. Breaches remain pinned until acknowledged or resolved. Exported data contains generation time, timezone, scope, and confidentiality classification.

## State transitions

```text
draft → validating → review → submitting → acknowledged → partially-filled → filled
                                  ├→ rejected
                                  └→ submission-uncertain → reconciled
acknowledged/partially-filled → cancel-pending → canceled
```

Back navigation from review preserves entered values. Changing account, instrument, side, or type invalidates the previous review and requires a new one.
