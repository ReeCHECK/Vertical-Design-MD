# Healthcare Workstation Permission Model

## Capability matrix

| Capability | Clinician | Nurse | Pharmacist | Care coordinator |
|---|---:|---:|---:|---:|
| View patient summary | Scoped | Scoped | Scoped | Minimum necessary |
| Edit clinical assessment | Credentialed | Scoped | No | No |
| Reconcile medication | Policy-based | Policy-based | Policy-based | No |
| Sign clinical content | Credentialed | Credentialed | Credentialed | Scoped |
| Manage handoff items | Yes | Yes | Scoped | Yes |
| Emergency override | Policy-based | Policy-based | Policy-based | Usually no |

## Contextual access

Authorization depends on identity, credential, care relationship, encounter, location, sensitivity flags, purpose of use, and time. Field-level restrictions may apply independently to notes, diagnoses, reproductive health, behavioral health, identity data, and other locally defined categories.

## Denied behavior

Do not render restricted content into the page and hide it with CSS. Explain the restriction generically, record access requests according to policy, and avoid leaking sensitive terms in notifications, URLs, analytics, or browser titles.

## Enforcement

Trusted services authorize every read, search, export, mutation, signature, and override. UI state helps prevent mistakes but is never an access-control boundary.
