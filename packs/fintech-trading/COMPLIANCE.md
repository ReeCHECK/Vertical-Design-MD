# Fintech Trading Risk and Compliance

## Mandatory product rules

- Record actor, timestamp, account, request identity, material inputs, validation result, acknowledgement, and subsequent state changes in an appropriate audit system.
- Redact secrets and unnecessary personal or strategy data from client logs and analytics.
- Require a review step for actions categorized as high consequence by product policy.
- Clearly distinguish estimates, delayed data, simulated data, and authoritative results.
- Use idempotent submission and reconcile unknown outcomes before offering repetition.
- Require server-side authorization and limit checks at execution time.

## Confirmation anatomy

Confirmation restates account, instrument, side, order type, quantity, price conditions, time in force, estimated consideration, and the most material warning. Typed confirmation is reserved for exceptional irreversible or unusually large actions; it is not a substitute for correct authorization.

## Privacy and audit

Screenshots, exports, and copied values may carry a classification label. Audit views show who did what and when without exposing credentials or secret risk thresholds. Retention, consent, surveillance, and jurisdiction-specific disclosure requirements are intentionally outside this reference pack.

## Review boundary

This pack is an original design recommendation, not a regulatory interpretation or certification. A real product must replace generic rules with reviewed policies for its asset classes, venues, customers, jurisdictions, and operating model.
