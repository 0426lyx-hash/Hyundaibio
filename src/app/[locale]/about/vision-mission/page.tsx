import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function VisionMissionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const v = messages.about.vision;
  const [titleLine1, titleLine2 = ""] = v.title.split(" – ");

  return (
    <AboutShell locale={locale} messages={messages} active="vision-mission">
      <section className="about-section">
        <div className="about-section-inner vision-inner">
          <h2 className="vision-title">
            <span className="vision-title-line1">{titleLine1}</span>
            <span className="vision-title-line2">{titleLine2}</span>
          </h2>
          <p className="vision-intro">{v.intro}</p>
          <h3 className="vision-label">{v.visionLabel}</h3>
          <p className="vision-quote">"{v.visionQuote}"</p>
          <h3 className="vision-label">{v.missionLabel}</h3>
          <p className="vision-quote">"{v.missionQuote}"</p>
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
