import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { categoryId, productCategories, products, type ProductCategory } from "@/content/products";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages, type Messages } from "@/i18n/messages";

function categoryName(category: ProductCategory, messages: Messages) {
  if (category === "TOX") return messages.navigation.toxin;
  if (category === "Dermal Fillers") return messages.navigation.fillers;
  return messages.navigation.skinCare;
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <section className="page-hero product-page-hero">
        <div className="page-container">
          <p className="section-kicker light">{messages.navigation.products}</p>
          <h1>{messages.products.title}</h1><p>{messages.products.description}</p>
        </div>
      </section>
      <nav className="category-nav page-container" aria-label={messages.navigation.products}>
        {productCategories.map((category) => <a key={category} href={`#${categoryId(category)}`}>{categoryName(category, messages)}</a>)}
      </nav>
      <div className="product-catalog page-container">
        {productCategories.map((category) => {
          const categoryProducts = products.filter((product) => product.category === category);
          return (
            <section className="catalog-section" id={categoryId(category)} key={category}>
              <div className="catalog-heading">
                <p>{messages.products.category}</p><h2>{categoryName(category, messages)}</h2>
                <span>{categoryProducts.length} {messages.products.count}</span>
              </div>
              <div className="catalog-grid">
                {categoryProducts.map((product) => <ProductCard product={product} locale={locale as Locale} key={product.slug} />)}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
