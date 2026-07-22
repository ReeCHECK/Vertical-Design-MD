# Enterprise Operations State Contract

## Loading and empty

Loading preserves table geometry and names the queue or region. Empty distinguishes a genuinely empty queue, no filter matches, unavailable data, and lack of access. Clearing filters does not change workspace or tenant scope.

## Error

Region-level failures retain unaffected content. Failed edits preserve user input and expose a safe retry path. Version conflicts display the current server value beside the attempted change. A dismissible toast is never the sole record of failure.

## Permission denied

Explain the unavailable capability and scope without exposing protected records. Offer an approved access-request route if configured. Refresh permission before retrying a previously denied mutation.

## Stale or partial

Show last refresh and which columns, services, or rows are incomplete. Disable decisions that depend on missing authoritative information. Live updates do not silently reorder the table while the user is selecting rows.

## Offline or reconnecting

Preserve view configuration and unsaved input according to policy, freeze mutations, and display connection status. Reconnection reloads workspace, permissions, object versions, and running jobs before editing resumes.

## Partial success

Summarize succeeded, skipped, failed, and processing counts. Provide per-item reason and an export. Retry targets only eligible failed items and creates a new attributable job.

## Scope changed

If filters, membership, permissions, or records change after selection, pause review and show old versus new scope. The user must consciously refresh or preserve the frozen target set according to policy.
