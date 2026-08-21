"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { products, type ProductCategory } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

const ABOUT_IMAGE = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/company.png";

type TabKey = "all" | ProductCategory;

const TABS: TabKey[] = ["all", "Toxin", "Filler", "Skincare"];

// 支持来自导航 / 页脚的分类锚点（#toxin / #filler / #skincare）
const HASH_TO_TAB: Record<string, TabKey> = {
  toxin: "Toxin",
  filler: "Filler",
  skincare: "Skincare",
};

function tabLabel(tab: TabKey, messages: Messages) {
  if (tab === "all") return messages.products.all;
  if (tab === "Toxin") return messages.navigation.toxin;
  if (tab === "Filler") return messages.navigation.fillers;
  return messages.navigation.skincare;
}

export function ProductCatalog({ locale, messages }: { locale: Locale; messages: Messages }) {
  const [active, setActive] = useState<TabKey>("all");

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash in HASH_TO_TAB) setActive(HASH_TO_TAB[hash]);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((product) => product.category === active)),
    [active],
  );

  return (
    <>
      <section className="about-hero">
        <Image src={ABOUT_IMAGE} alt={messages.products.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        <div className="about-hero-overlay" aria-hidden="true" />
        <h1>{messages.products.title}</h1>
        <p>{messages.products.description}</p>
      </section>

      <nav className="product-tabs" aria-label={messages.navigation.products}>
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`product-tab${active === tab ? " active" : ""}`}
            onClick={() => setActive(tab)}
            aria-pressed={active === tab}
          >
            {tabLabel(tab, messages)}
          </button>
        ))}
      </nav>

      <section className="product-catalog page-container" id="product-catalog">
        <div className="product-catalog-heading">
          <div>
            <p>{messages.products.category}</p>
            <h2>{active === "all" ? messages.products.title : tabLabel(active, messages)}</h2>
          </div>
          <span>
            {filtered.length} {messages.products.count}
          </span>
        </div>
        <div className="catalog-grid">
          {filtered.map((product) => (
            <ProductCard product={product} locale={locale} key={product.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
