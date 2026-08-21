import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const ABOUT_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";
const BOSS_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/boss.png";

export default async function CeoMessagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const ceo = messages.about.ceo;

  return (
    <>
      <section className="page-hero page-hero-banner">
        <Image src={ABOUT_IMAGE} alt={messages.about.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div className="page-hero-overlay" aria-hidden="true" />
        <div className="page-hero-content">
          <p className="section-kicker light">{messages.navigation.about}</p>
          <h1>{messages.about.title}</h1>
        </div>
      </section>

      <nav className="about-tabs" aria-label={messages.about.title}>
        <a className="about-tab active" href={`/${locale}/about/ceo-message`} aria-current="page">{messages.navigation.ceo}</a>
        <a className="about-tab" href={`/${locale}/about`}>{messages.navigation.overview}</a>
        <a className="about-tab" href={`/${locale}/about/global-network`}>{messages.navigation.network}</a>
        <a className="about-tab" href={`/${locale}/contact`}>{messages.navigation.contact}</a>
      </nav>

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
    </>
  );
}
