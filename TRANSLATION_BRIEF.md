# Translation Brief — pogoteams.app

This repository serves the PoGoTeams marketing site (https://pogoteams.app). It
ships in EN as the source language and is being localized to PL, DE, JA. ES,
FR, IT, PT-BR will follow.

You are a translation agent. Your job is to produce a **native-sounding**,
quality translation of one source file into one target locale. Not a literal
translation, not machine-output prose — the kind of text a fluent native
speaker would actually write.

---

## What you translate

Two file types live in this repo. Each task you receive will be one file at a
time, in one of these shapes:

### 1. Legal pages (`src/content/legal/<lang>/<page>.md`)

Three pages: `privacy.md`, `support.md`, `thanks.md`. **All translatable
strings are in YAML frontmatter** — there is no markdown body. The body is
empty by design.

Schema (see `src/content.config.ts` for the authoritative shape):

- **privacy.md**: `title`, `description` (meta tag), `lastUpdated`, `sections[]
  { heading, body }`. The `body` field may contain inline HTML like
  `<a href="mailto:...">...</a>` — translate the visible text, keep the tag.
- **support.md**: `title`, `description`, `intro`, `cards[] { icon, title,
  body, buttonText?, buttonHref? }`, `faqTitle`, `faqItems[] { question,
  answer }`. The `icon` field is `email` or `info` — **do not translate**.
  The `buttonHref` is a `mailto:` URL — **do not translate**.
- **thanks.md**: `title`, `description`, `heading`, `subheading`, `note`,
  `backLink`.

Source of truth: `src/content/legal/en/<page>.md`. Copy that file as your
starting structure, swap strings to the target language, save as
`src/content/legal/<targetLang>/<page>.md`.

### 2. Blog posts (`src/content/blog/<lang>/<slug>.md`)

Standard markdown with frontmatter. Three posts currently exist in `en/`:

- `custom-movesets-guide.md`
- `gbl-memories-in-motion-season-preview.md`
- `pogoteams-now-on-android.md`

Frontmatter (`src/content.config.ts`):
- `title`, `description` — translate
- `pubDate`, `updatedDate` — **keep verbatim** (ISO date)
- `tags` — translate the user-visible portion if any are surfaced in UI; if
  unsure, keep EN since these aren't displayed publicly today

Body is markdown prose. Translate naturally. Preserve all link targets,
markdown structure, and code blocks unchanged.

If a slug has no native translation, the build falls back to the EN file with
`lang="en"` set on the rendered content — so it's safe to translate posts
incrementally. Drop in `pl/custom-movesets-guide.md` when ready; the build
picks it up.

---

## What NOT to translate

- **Brand:** "PoGoTeams" stays as-is in every language.
- **URLs, emails, file paths:** keep verbatim (`pogoteambuilder@gmail.com`,
  `https://...`, `/privacy/`, `mailto:...`).
- **Code blocks** in markdown (anything fenced by triple backticks).
- **HTML tags** inside string values (`<a href>`, `<br>`, etc.) — translate
  the inner text, keep the tag.
- **Date/time formats:** the site formats dates per-locale in template code;
  source dates stay as ISO strings in frontmatter.
- **Schema field names** in YAML keys (`title:`, `sections:`, `body:`, etc.).
  Only translate the **values**.
- **YAML structure:** preserve indentation, list ordering, and field order
  matching the EN source.

---

## Glossary

The canonical glossary for PvP / Pokémon GO terminology lives in the main app
repo at `pogo_teambuilder/docs/TRANSLATION_GLOSSARY.md`. **Read it before
translating any term that touches gameplay** — Pokémon names, move names,
cup names, "Lead Gameplan", "moveset", "matchup", "shield", "GBL", etc. The
glossary already locks decisions per locale (e.g. PL "Lead Gameplan" stays
loanword, JA "リード対策"; "moveset" → DE "Attackensatz" / PL "zestaw
ruchów" / JA "技構成").

If a term is not in the glossary, use a native-sounding equivalent. **Do not
calque from English** unless the glossary explicitly locks the calque.

---

## Tone per locale

- **PL** — Audience is laypeople (not just hardcore PvP players, since this is
  a marketing site). Prefer Polish equivalents over PvP-Anglicisms when the
  Polish word is widely understood (e.g. "drużyna" not "team", "pojedynek" not
  "matchup" in marketing copy — but "matchup" is OK in glossary-locked
  technical contexts). When in doubt, lean accessible. See
  `feedback_website_pl_accessibility.md` in the main repo for the rationale.
- **DE** — Formal "Sie" is too stiff for a gaming app; "Du"-form is the right
  register. Match the energy of the source (enthusiastic, direct).
- **JA** — Default to です/ます polite form. Pokémon GO terminology is the
  glossary's call (e.g. ポケモン, 対面, リード対策). Avoid katakana
  transliterations when an established Japanese term exists.

---

## Length constraints

Some strings hit length limits in surrounding UI. Watch out:

- `meta.title` / `title` fields → keep close to EN length when possible
  (browser tabs, OG cards have hard limits ~60–70 chars).
- `meta.description` / `description` → ~155 chars ideal for SEO; can stretch
  to ~200.
- Other fields have no hard limits, but layouts assume reasonable lengths.

---

## Verification

After translating, the user will run `npm run build` (in this repo) to verify
no build breakage. Schema validation will reject mistyped/missing fields.

If you change frontmatter shape (added/removed a field), that's a bug — the
schema is locked, only translate **values**.

---

## Locale codes

- `en` — English (source)
- `pl` — Polish
- `de` — German
- `ja` — Japanese

Future: `es`, `fr`, `it`, `pt-br` will be added as separate folders alongside
the existing locales. Same file structure, same brief.
