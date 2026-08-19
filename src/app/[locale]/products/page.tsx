import { notFound } from "next/navigation";
import { ProductCatalog } from "@/components/product-catalog";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  return <ProductCatalog locale={locale} messages={messages} />;
}
