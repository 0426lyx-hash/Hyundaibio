import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const ABOUT_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";
const NETWORK_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/global%20internet.png";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const sections = messages.about.sections;

  const tabItems = [
    { id: "about-overview", title: sections[0] },
    { id: "about-vision", title: sections[1] },
    { id: "about-history", title: sections[2] },
    { id: "global-network", title: sections[3] },
  ];

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
        {tabItems.map((item) => (
          <a key={item.id} className="about-tab" href={`#${item.id}`}>{item.title}</a>
        ))}
      </nav>

      <div className="about-sections">
        {tabItems.slice(0, 3).map((item) => (
          <section className="about-section" id={item.id} key={item.id}>
            <div className="about-section-inner">
              <h2>{item.title}</h2>
              <p>{messages.common.contentComingSoon}</p>
            </div>
          </section>
        ))}

        <section className="global-network" id="global-network">
          <h2>{messages.about.networkHeading}</h2>
          <p>{messages.about.networkDescription}</p>
          <div className="global-network-map">
            <Image
              src={NETWORK_IMAGE}
              alt={messages.about.networkTitle}
              fill
              sizes="100vw"
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
