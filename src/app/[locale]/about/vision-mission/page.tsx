import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function VisionMissionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const vm = messages.about.visionMission;

  return (
    <AboutShell locale={locale} messages={messages} active="vision-mission">
      <section className="about-section vision-mission">
        <div className="about-section-inner">
          <h2>{vm.headline}</h2>
          <p className="vision-subhead">{vm.subhead}</p>
          <p className="vision-body">{vm.body}</p>
          <div className="vision-mission-block">
            <h3>{vm.visionLabel}</h3>
            <p>{vm.vision}</p>
          </div>
          <div className="vision-mission-block">
            <h3>{vm.missionLabel}</h3>
            <p>{vm.mission}</p>
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
