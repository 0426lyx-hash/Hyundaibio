import "server-only";
import type { Locale } from "@/i18n/config";

const loaders = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  zh: () => import("../../messages/zh.json").then((module) => module.default),
  ko: () => import("../../messages/ko.json").then((module) => module.default),
  ru: () => import("../../messages/ru.json").then((module) => module.default),
};

export type Messages = Awaited<ReturnType<(typeof loaders)["en"]>>;

export function getMessages(locale: Locale) {
  return loaders[locale]();
}
