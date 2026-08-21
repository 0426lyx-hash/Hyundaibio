import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export type AboutTabKey = "about" | "ceo-message" | "vision-mission" | "history" | "global-network";

const ABOUT_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";

export function AboutShell({ locale, messages, active, children }: {
  locale: Locale;
  messages: Messages;
  active: AboutTabKey;
  children: ReactNode;
}) {
  const tabs: { key: AboutTabKey; label: string; href: string }[] = [
    { key: "about", label: messages.about.sections[0], href: `/${locale}/about` },
    { key: "ceo-message", label: messages.navigation.ceo, href: `/${locale}/about/ceo-message` },
    { key: "vision-mission", label: messages.about.sections[1], href: `/${locale}/about/vision-mission` },
    { key: "history", label: messages.about.sections[2], href: `/${locale}/about/history` },
    { key: "global-network", label: messages.about.sections[3], href: `/${locale}/about/global-network` },
  ];

  return (
    <>
      <section className="about-hero">
        <Image src={ABOUT_IMAGE} alt={messages.about.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div className="about-hero-overlay" aria-hidden="true" />
        <h1>{messages.about.title}</h1>
      </section>
      <nav className="about-tabs" aria-label={messages.about.title}>
        {tabs.map((tab) => (
          <a
            key={tab.key}
            className={`about-tab${active === tab.key ? " active" : ""}`}
            href={tab.href}
            aria-current={active === tab.key ? "page" : undefined}
          >
            {tab.label}
          </a>
        ))}
      </nav>
      {children}
    </>
  );
}
