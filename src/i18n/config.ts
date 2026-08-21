export const locales = ["en", "zh", "ko", "ru"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  ko: "ko-KR",
  ru: "ru-RU",
};
