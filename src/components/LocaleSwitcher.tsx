"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = { en: "EN", zh: "中文", ko: "한국어", ru: "Русский" };

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|zh|ko|ru)(?=\/|$)/, "");

  return (
    <details className="locale-switcher">
      <summary>{labels[locale]} <span>↕</span></summary>
      <div>
        {locales.map((targetLocale) => (
          <Link
            key={targetLocale}
            href={`/${targetLocale}${suffix}`}
            className={targetLocale === locale ? "active" : ""}
          >
            {labels[targetLocale]}
          </Link>
        ))}
      </div>
    </details>
  );
}
