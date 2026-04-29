# Localized Store Badges

Per-locale "Download on the App Store" and "Get it on Google Play" badges.
HomePage picks the right file by `lang` prop. Files are referenced from
`src/components/HomePage.astro` via `APPLE_BADGE_LOCALES` and
`GOOGLE_BADGE_LOCALES` sets — keep those in sync with the file inventory.

## File layout

```
appstore/<locale>.svg      — Apple App Store
googleplay/<locale>.png    — Google Play
```

`<locale>` matches the language codes used in `src/i18n/utils.ts`
(`en`, `pl`, `de`, `ja`) and the soon-to-be-added `es`, `fr`, `it`, `pt-br`.

## Current inventory

| Locale | App Store source                                                  | Google Play source                                  |
| ------ | ----------------------------------------------------------------- | --------------------------------------------------- |
| en     | `developer.apple.com/assets/elements/badges/download-on-the-app-store.svg` | `play.google.com/intl/en_us/.../en_badge_web_generic.png` |
| pl     | Apple Marketing Tools toolbox, locale Polski, **black** SVG       | `play.google.com/intl/pl/.../pl_badge_web_generic.png`    |
| de     | toolbox, Deutsch, black SVG                                       | `play.google.com/intl/de_DE/.../de_badge_web_generic.png` |
| ja     | toolbox, 日本語, black SVG                                        | `play.google.com/intl/ja_JP/.../ja_badge_web_generic.png` |
| es     | toolbox, **Mexico** (LATAM, matches Google's `es-419`), black SVG | `play.google.com/intl/es-419/.../es_badge_web_generic.png` |
| fr     | toolbox, Français (France), black SVG                             | `play.google.com/intl/fr/.../fr_badge_web_generic.png`    |
| it     | toolbox, Italiano, black SVG                                      | `play.google.com/intl/it/.../it_badge_web_generic.png`    |
| pt-br  | toolbox, Português (Brasil), black SVG                            | `play.google.com/intl/pt-BR/.../pt-br_badge_web_generic.png` |

ES, FR, IT, PT-BR are pre-positioned for the future locale rollout — site
routing isn't enabled yet (only en/pl/de/ja listed in `astro.config.mjs`
`i18n.locales`), but badge files are ready to drop in when those locales
go live.

## Refreshing or re-adding an App Store badge

Apple's marketing toolbox (https://toolbox.marketingtools.apple.com) is the
official source for localized "Download on the App Store" SVGs. There is no
public direct-download URL — the toolbox web app generates the SVG via a
session. Workflow:

1. Open the toolbox in a browser, search PoGoTeams (App ID `6755302593`).
2. Choose locale from the dropdown.
3. Pick **black badge** (matches our convention) → **SVG**.
4. Click **Download** — you get a folder with `black.svg` plus three
   variants (white / pre-order black / pre-order white) we don't use.
5. Save `black.svg` as `appstore/<locale>.svg` here (overwrite if refreshing).
6. If adding a new locale, also extend `APPLE_BADGE_LOCALES` in
   `src/components/HomePage.astro`.
7. Rebuild (`npm run build`) and verify the page renders the right badge.

## Updating Google Play badges

Direct URLs are stable. To refresh or add a locale:

```bash
# inside public/assets/badges/googleplay/
curl -sfL -o <locale>.png "https://play.google.com/intl/<intl_segment>/badges/static/images/badges/<locale>_badge_web_generic.png"
```

The `intl_segment` differs from the file slug for some locales — see the
table above for the exact pairing.
