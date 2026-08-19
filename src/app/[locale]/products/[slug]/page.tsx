import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { getProduct, products } from "@/content/products";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

function descriptionFor(locale: Locale, product: NonNullable<ReturnType<typeof getProduct>>) {
  return locale === "zh" ? product.descriptionZh : locale === "ko" ? product.descriptionKo : product.description;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  return isLocale(locale) && product ? { title: product.name, description: descriptionFor(locale, product) } : {};
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = getProduct(slug);
  if (!product) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <section className="product-detail page-container">
        {product.image ? (
          <div className="product-detail-media">
            <Image src={product.image} alt={product.name} fill sizes="100vw" quality={100} style={{ objectFit: "cover" }} priority />
          </div>
        ) : (
          <MediaPlaceholder label={`${product.name} ${messages.common.media}`} ratio="1:1 transparent PNG" />
        )}
        <div className="product-detail-copy">
          <p className="section-kicker">{product.category}</p><h1>{product.name}</h1>
          <p>{descriptionFor(locale, product)}</p>
          <div className="product-status"><span>{messages.products.category}</span><strong>{messages.products.pending}</strong></div>
          <Link href={`/${locale}/contact`} className="solid-link">{messages.products.inquiry}</Link>
          <Link href={`/${locale}/products`} className="back-link">← {messages.products.back}</Link>
        </div>
      </section>
      <section className="product-information">
        <div className="page-container product-information-grid">
          <div><p className="section-kicker">{messages.navigation.products}</p><h2>{messages.common.contentPending}</h2></div>
          <div className="information-list">{messages.about.sections.map((item) => <div key={item}><span>{item}</span><small>{messages.common.contentPending}</small></div>)}</div>
        </div>
      </section>
    </>
  );
}
