# Enterprise Operations Permission Model

## Capability matrix

| Capability | Agent | Team lead | Approver | Administrator | Auditor |
|---|---:|---:|---:|---:|---:|
| View scoped queues | Yes | Yes | Scoped | Metadata | Read-only |
| Claim/update item | Scoped | Yes | No | No | No |
| Bulk operational action | Policy-based | Yes | No | No | No |
| Decide approval | No | Scoped | Yes | No | No |
| Configure access/views | No | Limited | No | Yes | No |
| View audit history | Own/scoped | Scoped | Scoped | Scoped | Yes |

## Scope dimensions

Capabilities are evaluated against tenant/workspace, queue, object type, field, action, ownership, approval separation, time, and data classification. “Can view item” does not automatically grant export, comment, assignment, or access to every field.

## Denied behavior

Bulk review removes unauthorized targets before execution and reports counts without leaking their contents. If capability changes during an open dialog, submission revalidates and the UI explains that access changed.

## Enforcement

Trusted services enforce tenant isolation and authorize list, search, field retrieval, export, mutation, bulk target resolution, approval, configuration, and audit access. UI configuration is never a security boundary.
