# Fintech Trading Content Rules

## Terminology

Use `Buy` and `Sell` only when those actions are accurate for the instrument. Prefer `Unrealized P/L` only if the audience understands the abbreviation; otherwise spell out `Unrealized profit or loss`. Do not call an acknowledged order “complete.”

## Numbers and units

Use tabular numerals and locale-aware grouping. Keep user-entered precision in the ticket, while display precision follows instrument rules. Currency codes appear when symbols are ambiguous. Negative values use a minus sign plus text or icon treatment; zero is neutral. Percentages state the denominator in help text when it is not obvious.

## Dates and time

Operational timestamps include seconds when sequence matters and always identify timezone. Relative time such as `12s ago` is paired with an exact timestamp on focus or hover. Never use relative time alone for an audit event.

## Warnings and confirmations

Warnings state condition, consequence, and available action: `Market data is 47 seconds old. New orders are disabled until a current quote is available.` Avoid generic copy such as `Something went wrong` when a safe, non-sensitive reason is known.

## Localization

Allow labels to expand by at least 40%. Do not assemble sentences from fragments. Decimal and grouping separators follow locale, but submitted machine values remain locale-independent. Bidirectional layouts require an explicit review of signed numbers, symbols, and chart axes.
