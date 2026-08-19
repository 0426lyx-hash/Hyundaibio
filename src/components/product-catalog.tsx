"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products, type ProductCategory } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

type TabKey = "all" | ProductCategory;

const TABS: TabKey[] = ["all", "TOX", "Dermal Fillers", "Cosmetics"];

// 各 Tab 对应的 hero 图片。TOX / Cosmetics 暂用总图占位，待后续提供专属图片 URL。
const HERO_IMAGE: Record<TabKey, string> = {
  all: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
  TOX: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
  "Dermal Fillers": "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/demafill%20full.png",
  Cosmetics: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
};

// 支持来自导航 / 页脚的分类锚点（#tox / #dermal-fillers / #cosmetics）
const HASH_TO_TAB: Record<string, TabKey> = {
  tox: "TOX",
  "dermal-fillers": "Dermal Fillers",
  cosmetics: "Cosmetics",
};

function tabLabel(tab: TabKey, messages: Messages) {
  if (tab === "all") return messages.products.all;
  if (tab === "TOX") return messages.navigation.toxin;
  if (tab === "Dermal Fillers") return messages.navigation.fillers;
  return messages.navigation.cosmetics;
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

  const hero = useMemo(() => {
    if (active === "Dermal Fillers") {
      return {
        image: HERO_IMAGE["Dermal Fillers"],
        kicker: messages.products.heroKicker,
        title: messages.navigation.fillers,
        description: messages.products.fillersDescription,
      };
    }
    return {
      image: HERO_IMAGE[active],
      kicker: messages.products.heroKicker,
      title: messages.products.title,
      description: messages.products.description,
    };
  }, [active, messages]);

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((product) => product.category === active)),
    [active],
  );

  return (
    <>
      <section className="product-hero" style={{ backgroundImage: `url(${hero.image})` }}>
        <div className="product-hero-text">
          <p className="section-kicker">{hero.kicker}</p>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
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
