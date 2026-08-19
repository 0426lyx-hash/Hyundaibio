import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import type { Locale } from "@/i18n/config";

type ProductCardProps = {
  product: Product;
  large?: boolean;
  locale?: Locale;
};

export function ProductCard({ product, large = false, locale = "en" }: ProductCardProps) {
  const localizedDescription =
    locale === "zh"
      ? product.descriptionZh
      : locale === "ko"
        ? product.descriptionKo
        : product.description;
  const imageLabel = locale === "zh" ? "产品图片" : locale === "ko" ? "제품 이미지" : "PRODUCT IMAGE";
  const imageHint = locale === "zh" ? "1:1 透明背景 PNG" : locale === "ko" ? "1:1 투명 PNG" : "1:1 transparent PNG";
  const viewLabel = locale === "zh" ? "查看产品" : locale === "ko" ? "제품 보기" : "View product";
  return (
    <Link
      href={`/${locale}/products/${product.slug}`}
      className={`product-card ${large ? "product-card-large" : ""}`}
    >
      {product.image ? (
        <div className="product-media product-media-image">
          <Image src={product.image} alt={product.name} fill sizes="100vw" quality={100} style={{ objectFit: "contain" }} />
        </div>
      ) : (
        <div className="product-media">
          <span>{imageLabel}</span>
          <small>{imageHint}</small>
        </div>
      )}
      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{localizedDescription}</p>
        <span className="text-link">{viewLabel} <b>→</b></span>
      </div>
    </Link>
  );
}
