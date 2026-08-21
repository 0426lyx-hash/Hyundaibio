export type ProductCategory =
  | "Toxin"
  | "Filler"
  | "Skincare";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  descriptionZh: string;
  descriptionKo: string;
  image?: string;
  imageScale?: number;
  featured?: boolean;
};

export const products: Product[] = [
  // ---- Toxin (7) ----
  {
    slug: "botatox-100u",
    name: "Botatox",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botatox100u3.png",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, thermally stable, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、热稳定性强、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 열 안정성, 빠른 작용.",
    featured: true,
  },
  {
    slug: "botatoxin",
    name: "Botatoxin",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botatoxin.JPG",
    description:
      "Wrinkle removal (forehead, frown, crow's feet), jawline definition, leg muscle sculpting, skin brightening. High purity, long-lasting, thermally stable, fast-acting.",
    descriptionZh:
      "去除皱纹（额头、眉间、鱼尾纹）、下颌轮廓、腿部肌肉塑形、肌肤提亮。高纯度、效果持久、热稳定性强、起效快速。",
    descriptionKo:
      "주름 제거(이마, 미간, 눈가), 턱선 정리, 종아리 라인, 피부 미백. 고순도, 오래 지속, 열 안정성, 빠른 작용.",
  },
  {
    slug: "ktox-100u",
    name: "K tox",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/ktox2.PNG",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 빠른 작용.",
  },
  {
    slug: "y-tox",
    name: "Y tox",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/ytox.JPG",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 빠른 작용.",
  },
  {
    slug: "jtox-100u",
    name: "J tox",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/jtox3.PNG",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 빠른 작용.",
  },
  {
    slug: "masetox",
    name: "MASETOX",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/masetox2.png",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, thermally stable, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、热稳定性强、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 열 안정성, 빠른 작용.",
  },
  {
    slug: "rollietox-100u",
    name: "Rollie Tox",
    category: "Toxin",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/Rollie.JPG",
    description:
      "Facial wrinkle reduction, jawline contouring, skin brightening & lifting. High potency, long-lasting, fast-acting.",
    descriptionZh:
      "改善面部皱纹、下颌轮廓塑形、肌肤提亮与提升。高效能、效果持久、起效快速。",
    descriptionKo:
      "얼굴 주름 개선, 턱선 윤곽, 피부 미백 및 리프팅. 높은 효능, 오래 지속, 빠른 작용.",
  },
  // ---- Filler (4) ----
  {
    slug: "dermafill-md",
    name: "Dermafill MD (Sub Q, Premium Q, Light Q, Dermashine)",
    category: "Filler",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/demafill.png",
    description:
      "Cross-linked HA, natural volume, lasting results. 1×1ml pre-filled syringe.",
    descriptionZh:
      "交联透明质酸，自然丰盈，效果持久。1×1ml 预充式注射器。",
    descriptionKo:
      "가교 히알루론산, 자연스러운 볼륨, 오래 지속되는 결과. 1×1ml 프리필드 시린지.",
  },
  {
    slug: "royal-fill",
    name: "Royal Fill (Fine, Deep, Subq)",
    category: "Filler",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/Royal%20Fill.png",
    description:
      "Cross-linked HA 24mg/ml, lidocaine 3mg/ml for comfort, PBS formulation. 1.1ml×1 pre-filled syringe.",
    descriptionZh:
      "交联透明质酸 24mg/ml，含利多卡因 3mg/ml 提升舒适度，PBS 配方。1.1ml×1 预充式注射器。",
    descriptionKo:
      "가교 HA 24mg/ml, 리도카인 3mg/ml 함유, PBS 포뮬레이션. 1.1ml×1 프리필드 시린지.",
  },
  {
    slug: "royal-premium-family",
    name: "Royal Premium Family",
    category: "Filler",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/ROYAL%20PREMIUM%20FAMILY.png",
    description:
      "Natural results, high plasticity & anti-deformation, collagen & elastin stimulation.",
    descriptionZh:
      "自然效果，高可塑性、抗变形，刺激胶原蛋白与弹性蛋白生成。",
    descriptionKo:
      "자연스러운 결과, 높은 가소성과 변형 저항, 콜라겐·엘라스틴 자극.",
  },
  {
    slug: "royal-premium-collagen",
    name: "Royal Premium (Collagen)",
    category: "Filler",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/royal%20premium%20family%20atelocollagen3%25_%E5%89%AF%E6%9C%AC.png",
    description:
      "Instant results, intense hydration, natural biocompatibility, cross-linked HA. 1×1.0ml syringe.",
    descriptionZh:
      "即时效果，强效补水，天然生物相容性，交联透明质酸。1×1.0ml 注射器。",
    descriptionKo:
      "즉각적인 결과, 집중 보습, 자연스러운 생체 적합성, 가교 HA. 1×1.0ml 시린지.",
  },
  // ---- Skincare (4) ----
  {
    slug: "attijou",
    name: "ATTIJOU (Rejuvenation)",
    category: "Skincare",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/Attijou.JPG",
    description:
      "Premium volume solution, deep wrinkle support, safe & natural, painless treatment.",
    descriptionZh:
      "优质容积解决方案，深层皱纹改善，安全天然，无痛治疗。",
    descriptionKo:
      "프리미엄 볼륨 솔루션, 깊은 주름 개선, 안전하고 자연스러운 무통 시술.",
  },
  {
    slug: "botanad-nad-plus",
    name: "Botanad",
    category: "Skincare",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botanad%20nad%2B.PNG",
    description:
      "Ultimate skin booster: deep hydration, elasticity & firmness, brightening & whitening.",
    descriptionZh:
      "终极皮肤焕活：深层补水、弹性与紧致、提亮与美白。",
    descriptionKo:
      "궁극의 스킨 부스터: 딥 보습, 탄력, 미백과 브라이트닝.",
  },
  {
    slug: "royal-premium-brightening",
    name: "Royal Premium Family (Brightening Ampoule)",
    category: "Skincare",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/Royal%20Premium%20Family%20(Brightening%20Ampoule).png",
    description:
      "Melanin inhibition, radiant glow, even skin tone, antioxidant protection.",
    descriptionZh:
      "抑制黑色素，焕发光彩，均匀肤色，抗氧化防护。",
    descriptionKo:
      "멜라닌 억제, 광채 부여, 균일한 피부 톤, 항산화 보호.",
  },
  {
    slug: "ultimate-pdrn-ampoule",
    name: "Ultimate PDRN Ampoule",
    category: "Skincare",
    image: "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/others/Ultimate%20PDRN%20Ampoule.png",
    imageScale: 0.75,
    description:
      "Salmon DNA (PDRN), cell renewal, total repair, barrier & elasticity synergy.",
    descriptionZh:
      "三文鱼 DNA（PDRN），促进细胞再生，全面修复，强化屏障与弹性。",
    descriptionKo:
      "연어 DNA(PDRN), 세포 재생, 토털 리페어, 장벽·탄력 시너지.",
  },
];

export const productCategories: ProductCategory[] = [
  "Toxin",
  "Filler",
  "Skincare",
];

export function categoryId(category: ProductCategory) {
  return category.toLowerCase().replaceAll(" ", "-");
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
