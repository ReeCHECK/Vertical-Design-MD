# Enterprise Operations Domain Model

## Actors

Operations agents triage and resolve assigned work. Team leads rebalance queues and handle escalations. Approvers make governed decisions. Workspace administrators configure access and views. Auditors inspect attributable history without operational mutation.

## Core objects

- **Work item:** stable ID, type, status, priority, owner, queue, created/updated time, SLA, attributes, and version.
- **Queue:** membership criteria, routing policy, capacity, service target, and access scope.
- **Assignment:** item, assignee/team, reason, time, and status.
- **Approval request:** requester, purpose, affected scope, evidence, required policy, decisions, and expiry.
- **Bulk job:** frozen target query or explicit IDs, requested action, exclusions, progress, per-item result, actor, and time.
- **Audit event:** actor, action, object/scope, prior/new state references, reason, timestamp, and request identity.

## Terms and time

`Selected page` differs from `all matching results`. `Assigned` differs from `owned`. `Overdue` depends on an authoritative SLA policy and calendar. Relative ages are display aids; exact timestamps remain available.

## Invariants

1. Workspace and tenant scope remain visible during every mutation.
2. Bulk operations freeze or explicitly re-evaluate their target set and disclose which behavior applies.
3. Partial success never appears as complete success.
4. Optimistic updates reconcile with authoritative object versions.
5. Approval decisions preserve requester, evidence, policy, actor, time, and reason.
6. Frontend visibility does not enforce permission or tenant isolation.
