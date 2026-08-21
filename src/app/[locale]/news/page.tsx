import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { newsItems } from "@/content/news";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const ABOUT_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <section className="about-hero">
        <Image src={ABOUT_IMAGE} alt={messages.news.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div className="about-hero-overlay" aria-hidden="true" />
        <h1>{messages.news.title}</h1>
        <p>{messages.news.description}</p>
      </section>
      <section className="activity-section page-container">
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.slug}>
              <MediaPlaceholder label={messages.common.newsImage} ratio="3:2" />
              <p>{messages.navigation.companyNews}</p><h3>{item.titles[locale]}</h3>
              <span>{messages.news.pending}</span>
              <Link className="text-link" href={`/${locale}/news/${item.slug}`}>{messages.news.read} →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
