import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const NETWORK_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/global%20internet.png";

export default async function GlobalNetworkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <section className="page-hero">
        <div className="page-container">
          <p className="section-kicker light">{messages.navigation.about}</p>
          <h1>{messages.about.networkTitle}</h1>
          <p>{messages.about.networkDescription}</p>
        </div>
      </section>
      <section className="network-section page-container">
        <div className="network-media">
          <Image
            src={NETWORK_IMAGE}
            alt={messages.about.networkTitle}
            fill
            sizes="100vw"
            quality={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </>
  );
}
