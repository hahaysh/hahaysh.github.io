/**
 * i18n.ts - Internationalization utilities
 * Supports: Korean (ko) - PRIMARY, English (en) - SECONDARY
 * 
 * Rules:
 * 1. Korean is the primary language (default content language)
 * 2. When updating content, modify Korean version first (data.ts)
 * 3. English version syncs with Korean version (data.en.ts)
 * 4. Each language has its own data module
 */

export type Language = "en" | "ko";

export const LANGUAGES: Record<Language, string> = {
  en: "English",
  ko: "한국어",
};

export const DEFAULT_LANGUAGE: Language = "en";

/**
 * Get the language from URL pathname
 * Returns "ko" if pathname starts with "/ko"
 * Returns "en" (default) otherwise
 */
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith("/ko")) {
    return "ko";
  }
  return DEFAULT_LANGUAGE;
}

/**
 * Get the localized pathname
 * Adds /ko prefix for Korean, keeps root for English
 */
export function getLocalizedPath(pathname: string, lang: Language): string {
  const cleanPath = pathname.replace(/^\/(en|ko)/, "") || "/";

  if (lang === "ko") {
    return `/ko${cleanPath === "/" ? "" : cleanPath}`;
  }
  return cleanPath;
}

/**
 * Get the path without language prefix
 */
export function getCleanPath(pathname: string): string {
  return pathname.replace(/^\/(en|ko)/, "") || "/";
}

/**
 * Language switcher data
 * Returns link to switch between languages
 */
export function getSwitcherLink(currentLang: Language, pathname: string): string {
  const cleanPath = getCleanPath(pathname);
  const targetLang: Language = currentLang === "en" ? "ko" : "en";

  return getLocalizedPath(cleanPath, targetLang);
}

/**
 * Metadata translation key
 * Keys for common metadata that appears on every page
 */
export const i18nKeys = {
  home: { en: "Home", ko: "홈" },
  about: { en: "About", ko: "소개" },
  certifications: { en: "Certifications", ko: "인증" },
  training: { en: "Training", ko: "교육" },
  portfolio: { en: "Portfolio", ko: "포트폴리오" },
  expertise: { en: "Expertise", ko: "전문성" },
  contact: { en: "Contact", ko: "연락처" },
  language: { en: "Language", ko: "언어" },
  english: { en: "English", ko: "English" },
  korean: { en: "한국어", ko: "한국어" },
} as const;

export function t(key: keyof typeof i18nKeys, lang: Language): string {
  return i18nKeys[key][lang];
}
