import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function VisionMissionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const v = messages.about.vision;

  return (
    <AboutShell locale={locale} messages={messages} active="vision-mission">
      <section className="about-section">
        <div className="about-section-inner">
          <h2>{v.title}</h2>
          <p>{v.intro}</p>
          <h3>{v.visionLabel}</h3>
          <p>"{v.visionQuote}"</p>
          <h3>{v.missionLabel}</h3>
          <p>"{v.missionQuote}"</p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-section-inner">
          <h2>{messages.about.sections[1]}</h2>
          <p>{messages.common.contentComingSoon}</p>
        </div>
      </section>
    </AboutShell>
  );
}
