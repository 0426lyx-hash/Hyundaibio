"use client";

import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products, type ProductCategory } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

type TabKey = "all" | ProductCategory;

const TABS: TabKey[] = ["all", "Toxin", "Filler", "Skincare"];

// 各 Tab 对应的 hero 图片。Toxin / Skincare 暂用总图占位，待后续提供专属图片 URL。
const HERO_IMAGE: Record<TabKey, string> = {
  all: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
  Toxin: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
  Filler: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/demafill%20full.png",
  Skincare: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/full.png",
};

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

  const hero = useMemo(() => {
    if (active === "Toxin") {
      return {
        image: HERO_IMAGE.Toxin,
        kicker: messages.products.heroKicker,
        title: messages.navigation.toxin,
        description: messages.products.toxinDescription,
      };
    }
    if (active === "Filler") {
      return {
        image: HERO_IMAGE.Filler,
        kicker: messages.products.heroKicker,
        title: messages.navigation.fillers,
        description: messages.products.fillersDescription,
      };
    }
    if (active === "Skincare") {
      return {
        image: HERO_IMAGE.Skincare,
        kicker: messages.products.heroKicker,
        title: messages.navigation.skincare,
        description: messages.products.skincareDescription,
      };
    }
    return {
      image: HERO_IMAGE.all,
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
