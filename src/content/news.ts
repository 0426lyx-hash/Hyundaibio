import type { Locale } from "@/i18n/config";

export const newsItems = [
  { slug: "company-update", titles: { en: "Company update", zh: "公司动态", ko: "회사 소식", ru: "Обновление компании" } },
  { slug: "global-activity", titles: { en: "Global activity", zh: "全球活动", ko: "글로벌 활동", ru: "Глобальная деятельность" } },
  { slug: "product-story", titles: { en: "Product story", zh: "产品故事", ko: "제품 이야기", ru: "История продукта" } },
] as const;

export function getNewsTitle(slug: string, locale: Locale) {
  return newsItems.find((item) => item.slug === slug)?.titles[locale];
}
