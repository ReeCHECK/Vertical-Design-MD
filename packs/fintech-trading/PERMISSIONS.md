# Fintech Trading Permission Model

## Capability matrix

| Capability | Trader | Risk analyst | Operations reviewer | Observer |
|---|---:|---:|---:|---:|
| View assigned market data | Yes | Yes | Yes | Yes |
| View assigned accounts | Yes | Scoped | Scoped | Scoped |
| Submit/amend/cancel | Scoped | No | Exception only | No |
| Override risk restriction | No | Policy-based | No | No |
| Reconcile unknown submission | View | View | Yes | No |
| Export data | Policy-based | Policy-based | Policy-based | Usually no |

## Field-level visibility

Account names, identifiers, balances, client data, and strategy labels may have independent visibility. Masked fields preserve type and last-four context only when policy allows. Exports use the same or stricter field policy as the screen.

## Denied behavior

When a known capability is unavailable, keep the control disabled only if seeing it helps the user understand the workflow; otherwise omit it. A nearby explanation names the missing capability, not sensitive policy details. Session permission changes invalidate open review dialogs and require revalidation.

## Enforcement

Every mutation and data request is authorized server-side against current identity, account scope, instrument, action, and limits. The UI is explanatory and preventive but never authoritative.
