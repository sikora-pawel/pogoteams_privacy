import en from './en.json';
import pl from './pl.json';
import de from './de.json';
import ja from './ja.json';

export const locales = ['en', 'pl', 'de', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, pl, de, ja } as const;
export type Dictionary = typeof en;

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang] as Dictionary;
}

// Read locale segment from a URL path. EN has no prefix (`/`, `/blog/...`),
// other locales sit under `/<lang>/...`.
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

// Build a locale-prefixed URL. EN stays unprefixed.
// Home for non-default locales gets a trailing slash to match Astro's `directory` build format.
export function localizedPath(path: string, lang: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

// Map a path that already may have a locale prefix to another locale.
// Used by the language switcher to swap locales while keeping the page.
export function swapLocaleInPath(pathname: string, target: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  const rest = '/' + segments.join('/');
  return localizedPath(rest === '/' ? '/' : rest, target);
}

// Format a date using the given locale. Falls back to the locale's
// `lang.dateLocale` (e.g. `pl-PL`) so day/month order matches conventions.
export function formatDate(date: Date, lang: Locale): string {
  const dict = getDictionary(lang);
  return date.toLocaleDateString(dict.lang.dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
