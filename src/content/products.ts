export type ProductCategory =
  | "TOX"
  | "Dermal Fillers"
  | "Cosmetics";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  descriptionZh: string;
  descriptionKo: string;
  image?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "botatox-100u",
    name: "BOTATOX 100U",
    category: "TOX",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botatox100u3.png",
    description:
      "Premium botulinum toxin type A for aesthetic use. A high-purity formulation developed for natural-looking results.",
    descriptionZh:
      "用于医美领域的高品质 A 型肉毒毒素，采用高纯度配方，旨在呈现自然效果。",
    descriptionKo: "메디컬 에스테틱을 위한 고순도 A형 보툴리눔 톡신 제품입니다.",
    featured: true,
  },
  {
    slug: "jtox-100u",
    name: "JTOX 100U",
    category: "TOX",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/jtox3.PNG",
    description:
      "Botulinum toxin type A for facial wrinkle improvement, with reliable quality and consistent results.",
    descriptionZh: "用于改善面部皱纹的 A 型肉毒毒素，品质稳定，效果一致。",
    descriptionKo: "얼굴 주름 개선을 위한 안정적인 품질의 A형 보툴리눔 톡신입니다.",
  },
  {
    slug: "rollietox-100u",
    name: "Rollietox 100U",
    category: "TOX",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/Rollie.JPG",
    description:
      "Botulinum toxin type A for aesthetic treatments and professional use.",
    descriptionZh: "适用于专业医美治疗的 A 型肉毒毒素产品。",
    descriptionKo: "전문 메디컬 에스테틱 시술을 위한 A형 보툴리눔 톡신 제품입니다.",
  },
  {
    slug: "ktox-100u",
    name: "KTOX 100U",
    category: "TOX",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/ktox2.PNG",
    description:
      "Korean botulinum toxin type A formulated for a range of aesthetic indications.",
    descriptionZh: "韩国 A 型肉毒毒素配方，适用于多种医美需求。",
    descriptionKo: "다양한 미용 적응증을 위한 한국산 A형 보툴리눔 톡신 제품입니다.",
  },
  {
    slug: "botaone-200u",
    name: "BOTAONE 200U",
    category: "TOX",
    description:
      "Botulinum toxin type A 200U, a higher-dose formulation for larger treatment areas.",
    descriptionZh: "200U A 型肉毒毒素，较高剂量规格适合更大治疗区域。",
    descriptionKo: "넓은 시술 부위를 위한 200U 고용량 A형 보툴리눔 톡신입니다.",
  },
  {
    slug: "botanad-nad-plus",
    name: "BOTANAD NAD+",
    category: "TOX",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botanad%20nad%2B.PNG",
    description:
      "Premium-grade BOTANAD formulation from the Hyundai Bio TOX portfolio, developed for professional aesthetic use.",
    descriptionZh: "现代生物 TOX 产品线的高品质 BOTANAD 制剂，适用于专业医美场景。",
    descriptionKo: "전문 메디컬 에스테틱을 위한 현대바이오 TOX 라인업의 프리미엄 BOTANAD 제품입니다.",
  },
  {
    slug: "royal-fill",
    name: "Royal Fill",
    category: "Dermal Fillers",
    description:
      "Premium hyaluronic acid dermal filler using advanced cross-linking technology.",
    descriptionZh: "采用先进交联技术的高品质透明质酸真皮填充剂。",
    descriptionKo: "첨단 가교 기술을 적용한 프리미엄 히알루론산 더말 필러입니다.",
  },
  {
    slug: "royal-premium-collagen",
    name: "ROYAL PREMIUM FAMILY (COLLAGEN)",
    category: "Dermal Fillers",
    description:
      "A collagen-enhanced dermal filler designed for comprehensive skin rejuvenation.",
    descriptionZh: "结合胶原成分的真皮填充剂，面向综合性肌肤焕活需求。",
    descriptionKo: "종합적인 피부 개선을 위한 콜라겐 강화 더말 필러입니다.",
  },
  {
    slug: "royal-premium-234",
    name: "ROYAL PREMIUM FAMILY 2/3/4",
    category: "Dermal Fillers",
    description:
      "An advanced HA filler series with varying densities for customized treatments.",
    descriptionZh: "具有不同交联密度的透明质酸填充剂系列，可满足定制化治疗需求。",
    descriptionKo: "맞춤형 시술을 위한 다양한 밀도의 히알루론산 필러 시리즈입니다.",
  },
  {
    slug: "cherry-lip",
    name: "Cherry Lip",
    category: "Dermal Fillers",
    description:
      "A specialized lip enhancement filler for natural-looking volume and contour definition.",
    descriptionZh: "专为唇部塑形设计的填充剂，帮助呈现自然丰盈度与清晰轮廓。",
    descriptionKo: "자연스러운 볼륨과 윤곽을 위한 입술 전용 필러입니다.",
  },
  {
    slug: "royal-premium-family",
    name: "ROYAL PREMIUM FAMILY",
    category: "Cosmetics",
    description:
      "Premium cosmetic product from the Royal Premium family, formulated for everyday skin care.",
    descriptionZh: "Royal Premium 系列的高品质化妆品，专为日常护肤打造。",
    descriptionKo: "데일리 스킨케어를 위한 Royal Premium 라인의 프리미엄 화장품입니다.",
  },
  {
    slug: "ultimate-pdrn-ampoule",
    name: "Ultimate PDRN Ampoule",
    category: "Cosmetics",
    description:
      "A PDRN-based ampoule for intensive skin recovery and hydration.",
    descriptionZh: "基于 PDRN 的安瓶精华，帮助肌肤密集修护与水润保湿。",
    descriptionKo: "집중 피부 회복과 보습을 위한 PDRN 앰플입니다.",
  },
];

export const productCategories: ProductCategory[] = [
  "TOX",
  "Dermal Fillers",
  "Cosmetics",
];

export function categoryId(category: ProductCategory) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
