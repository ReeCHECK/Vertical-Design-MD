# Healthcare Workstation State Contract

## Loading and empty

Reserve layout and identify the source being loaded. Never show blank clinical regions as proof of absence. Empty states distinguish no recorded item, no item in the selected period, unavailable source, and not yet reconciled.

## Error

Retain valid draft work and identify which source or action failed. A failed write remains unsigned and does not update the clinical summary optimistically unless the system explicitly represents pending status. Retry copy explains whether repetition is safe.

## Permission denied

Protect sensitive values while explaining that access is restricted. Provide the approved request or escalation route without revealing hidden diagnoses, notes, or patient relationships.

## Stale or partial

Label the affected source, last successful refresh, and missing regions. Partial data cannot be summarized as a complete patient view. Actions that require current information are blocked according to policy with a persistent reason.

## Offline or reconnecting

Show connectivity and last synchronization. Mutations are disabled unless an approved offline workflow exists. Reconnection refreshes identity, encounter, permissions, alerts, and server versions before allowing sign-off.

## Identity conflict

Freeze clinical mutation, present only the identifiers authorized for matching, and route to the approved resolution workflow. Never let urgency dismiss the conflict without an explicit governed override.

## Unsigned change

Draft content is visibly distinct from signed clinical record. Navigation or patient change triggers a choice to return, discard when permitted, or preserve draft. Closing a dialog never implies signature.
