# Fintech Trading State Contract

## Loading

Reserve table and ticket geometry. Show which source is loading and retain the previous snapshot only if it is visibly labeled with its timestamp. Loading never masquerades as zero.

## Empty

Distinguish “no open orders,” “no positions in scope,” and “no instruments match filters.” Preserve account and filter context and offer the single most relevant recovery action.

## Error

Keep valid user input. Identify the failed region and whether retry is safe. Validation errors sit beside the field and are summarized at review. Service rejection shows the authoritative reason without exposing sensitive internals.

## Permission denied

Show the denied capability, affected scope, and escalation path if one exists. A hidden button does not count as enforcement. Do not reveal protected account or position details in the explanation.

## Stale or partial

Display timestamp, source, and explicit `Delayed`, `Stale`, or `Partial` label. Disable actions whose policy requires fresh data and explain the dependency. Never blend values from incompatible timestamps without labeling them.

## Offline or reconnecting

Freeze mutation controls, preserve unsent draft input locally according to security policy, and show reconnect progress. On reconnection, refresh permissions, limits, market state, and server order status before re-enabling submission.

## Submission uncertain

Lock the original request, display its client reference and submission time, and provide `Check status` rather than `Submit again`. Reconciliation determines accepted, rejected, or not-found according to backend policy.

## Market closed

Name the session state and next known session time when authoritative. Explain whether queued orders are supported and how time in force behaves; do not infer exchange policy from the clock alone.
