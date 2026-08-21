import Image from "next/image";
import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const BOSS_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/boss2.png";

export default async function CeoMessagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const ceo = messages.about.ceo;

  return (
    <AboutShell locale={locale} messages={messages} active="ceo-message">
      <section className="ceo-message">
        <div className="ceo-photo">
          <Image src={BOSS_IMAGE} alt={messages.navigation.ceo} fill sizes="350px" quality={100} style={{ objectFit: "cover" }} />
        </div>
        <div className="ceo-text">
          <h2>{ceo.title}</h2>
          {ceo.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="ceo-signature">
            {ceo.signature.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
