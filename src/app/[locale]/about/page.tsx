import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  return <PageShell eyebrow={messages.navigation.about} title={messages.about.title} description={messages.about.description} sections={messages.about.sections} locale={locale} heroImage="https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png" />;
}
