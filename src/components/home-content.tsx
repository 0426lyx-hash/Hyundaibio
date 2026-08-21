import Link from "next/link";
import { BrandLogos } from "@/components/BrandLogos";
import { HeroSection } from "@/components/HeroSection";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ProductCard } from "@/components/product-card";
import { StatsCounter } from "@/components/StatsCounter";
import { products } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function HomeContent({ locale, messages }: { locale: Locale; messages: Messages }) {
  const h = messages.home;
  const n = messages.navigation;
  const featuredProduct = products.find((product) => product.featured) ?? products[0];
  const newsCategories = [n.companyNews, n.events, n.blogs];

  return (
    <>
      <HeroSection label={h.hero} />
      <section className="intro-section page-container">
        <div className="intro-heading">
          <p className="section-kicker">{h.introKicker}</p>
          <h1>{h.introTitle}</h1>
          <p>{h.introCopy}</p>
          <Link href={`/${locale}/about`} className="outline-link">{h.aboutLink}</Link>
        </div>
        <StatsCounter labels={messages.metrics} pending={h.dataPending} />
      </section>

      <section className="brand-section">
        <div className="page-container">
          <div className="section-heading-row">
            <div><p className="section-kicker">{h.brandKicker}</p><h2>BOTATOX</h2></div>
            <Link href={`/${locale}/products`}>{h.allProducts} <span>→</span></Link>
          </div>
          <div className="featured-product-layout">
            <ProductCard product={featuredProduct} large locale={locale} />
            <div className="brand-story">
              <span className="brand-story-number">01</span><p>{h.flagship}</p>
              <h3>{h.brandTitle}</h3><p className="brand-story-copy">{h.brandCopy}</p>
            </div>
          </div>
          <BrandLogos labels={[n.toxin, n.fillers, n.skincare]} />
        </div>
      </section>

      <section className="portfolio-section page-container">
        <div className="section-heading-row">
          <div><p className="section-kicker">{h.portfolioKicker}</p><h2>{h.portfolioTitle}</h2></div>
          <Link href={`/${locale}/products`}>{h.explore} <span>→</span></Link>
        </div>
        <ProductCarousel locale={locale} />
      </section>

      <section className="statement-section">
        <MediaPlaceholder label={messages.common.campaignImage} ratio="Desktop 21:9 · Mobile 4:5" className="statement-media" />
        <div className="statement-copy page-container">
          <p className="section-kicker light">{h.direction}</p><h2>{h.directionTitle}</h2><p>{h.directionCopy}</p>
        </div>
      </section>

      <section className="activity-section page-container">
        <div className="section-heading-row">
          <div><p className="section-kicker">{h.activities}</p><h2>{h.stories}</h2></div>
          <Link href={`/${locale}/news`}>{h.allNews} <span>→</span></Link>
        </div>
        <div className="news-grid">
          {newsCategories.map((category, index) => (
            <article className="news-card" key={category}>
              <MediaPlaceholder label={messages.common.newsImage} ratio="3:2" />
              <p>{category}</p><h3>{messages.news.title} {String(index + 1).padStart(2, "0")}</h3>
              <span>{messages.news.pending}</span>
            </article>
          ))}
        </div>
      </section>
      <NewsletterSignup kicker={h.stayConnected} title={h.latest} placeholder={h.newsletter} />
    </>
  );
}
