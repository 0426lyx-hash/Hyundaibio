import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { getProduct, products, type ProductCategory } from "@/content/products";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages, type Messages } from "@/i18n/messages";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

function descriptionFor(locale: Locale, product: NonNullable<ReturnType<typeof getProduct>>) {
  return locale === "zh" ? product.descriptionZh : locale === "ko" ? product.descriptionKo : product.description;
}

function categoryName(category: ProductCategory, messages: Messages) {
  if (category === "Toxin") return messages.navigation.toxin;
  if (category === "Filler") return messages.navigation.fillers;
  return messages.navigation.skincare;
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
            <Image src={product.image} alt={product.name} fill sizes="100vw" quality={100} style={{ objectFit: "cover", ...(product.imageScale ? { transform: `scale(${product.imageScale})` } : {}) }} priority />
          </div>
        ) : (
          <MediaPlaceholder label={`${product.name} ${messages.common.media}`} ratio="1:1 transparent PNG" />
        )}
        <div className="product-detail-copy">
          <p className="section-kicker">{categoryName(product.category, messages)}</p><h1>{product.name}</h1>
          <p>{descriptionFor(locale, product)}</p>
          <div className="product-status"><span>{messages.products.category}</span><strong>{messages.products.pending}</strong></div>
          <Link href={`/${locale}/contact`} className="solid-link">{messages.products.inquiry}</Link>
          <Link href={`/${locale}/products`} className="back-link">← {messages.products.back}</Link>
        </div>
      </section>
    </>
  );
}
