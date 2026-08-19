import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const CEO_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";

export default async function CeoMessagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const ceo = messages.about.ceo;

  return (
    <section className="ceo-section" style={{ backgroundImage: `url(${CEO_IMAGE})` }}>
      <div className="ceo-content">
        <p className="section-kicker light">{messages.navigation.about}</p>
        <h1>{ceo.title}</h1>
        {ceo.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="ceo-signature">
          {ceo.signature.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
