# Enterprise Operations Workflows

## Triage work queue

The user enters a known workspace and queue or saved view. The system loads items with filter, sort, timezone, and last refresh. Opening an item preserves the queue context. Claim, assign, prioritize, or resolve actions validate the current object version; conflicts show the newer state and let the user reconsider rather than silently overwriting.

## Perform bulk action

The user selects explicit rows or all matching results. The UI states selection scope and captures the query/version. Review shows action, target count, exclusions, irreversible effects, and permission/policy failures. Execution becomes a trackable bulk job. Results distinguish succeeded, skipped, failed, and still processing items and provide safe retry only for eligible failures.

## Review and decide approval

The approver sees requester, purpose, affected scope, evidence, policy checks, conflicts, expiry, and prior decisions. Approve/reject/request-changes each require an explicit reason according to policy. The authoritative response updates status; timeout becomes an uncertain result that is reconciled before another decision.

## State transitions

```text
new → queued → assigned → in-progress → resolved/closed
bulk-draft → reviewed → running → completed/partial/failed
approval-pending → approved/rejected/changes-requested/expired
```

Changing workspace, target scope, action, or material filter invalidates review and requires confirmation again.
