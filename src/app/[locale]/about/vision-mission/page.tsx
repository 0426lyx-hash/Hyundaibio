import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function VisionMissionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <AboutShell locale={locale} messages={messages} active="vision-mission">
      <section className="about-section">
        <div className="about-section-inner">
          <h2>Transforming Beauty, Empowering Lives<span> – Hyundai Bio</span></h2>
          <p>Hyundai Bio leads the global medical beauty industry by harmonizing outer elegance with inner vitality. We are shaping the future of holistic beauty through continuous innovation and growth.</p>
          <h3>VISION</h3>
          <p>"Enriching Human Lives Beyond Beauty."</p>
          <h3>MISSION</h3>
          <p>"To build a next-generation medical beauty ecosystem that harmonizes physical elegance with inner vitality."</p>
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
