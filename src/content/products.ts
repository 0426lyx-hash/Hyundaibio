export type ProductCategory =
  | "Toxin"
  | "Filler"
  | "Skincare";

export type ProductDetailSection = {
  title: string;
  items: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  descriptionZh: string;
  descriptionKo: string;
  image?: string;
  imageScale?: number;
  details?: ProductDetailSection[];
  featured?: boolean;
};

// 共享的 Toxin 详细说明模板（多个产品复用）
const toxWrinkleBenefits = [
  "Facial Wrinkle Reduction: Smooths fine lines and expression wrinkles for a rejuvenated, youthful appearance.",
  "Jawline Reduction: Relaxes masseter muscles to sculpt a slimmer, better-defined V-line contours.",
  "Skin Brightening & Lifting: Enhances overall radiance while tightening and lifting sagging skin.",
];

const toxCoreFeatures = [
  "High Potency & High Purity: Refined with advanced processing to deliver maximum active strength and minimal impurities.",
  "Long-Lasting Efficacy: Engineered for extended durability, maintaining results longer between sessions.",
  "Fast-Acting Results: Features a rapid onset of action that yields visible improvements shortly after treatment.",
];

const toxCoreFeaturesThermal = [
  toxCoreFeatures[0],
  toxCoreFeatures[1],
  "Thermal Stability: Demonstrates high resistance to temperature fluctuations, ensuring formula integrity and stability.",
  toxCoreFeatures[2],
];

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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeaturesThermal },
    ],
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
    details: [
      {
        title: "Key Benefits",
        items: [
          "Facial Wrinkle Removal: Smooths fine lines and deep expression wrinkles across the forehead, frown lines, and crow's feet.",
          "Jawline Definition & Muscle Reduction: Relaxes masseter and facial muscles to refine contours, achieving a slimmer, sharper jawline.",
          "Leg Muscle Sculpting: Targets larger muscle groups in the legs to smooth body contours and create a sleeker profile.",
          "Skin Brightening & Lifting: Enhances overall skin radiance while tightening and lifting sagging facial tissue.",
        ],
      },
      { title: "Core Features", items: toxCoreFeaturesThermal },
    ],
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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeatures },
    ],
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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeatures },
    ],
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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeatures },
    ],
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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeaturesThermal },
    ],
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
    details: [
      { title: "Key Benefits", items: toxWrinkleBenefits },
      { title: "Core Features", items: toxCoreFeatures },
    ],
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
    details: [
      { title: "Key Feature", items: ["Natural Volume, Lasting Confidence"] },
      {
        title: "Core Features",
        items: [
          "Cross-Linked Hyaluronic Acid: Formulated with advanced cross-linking technology for superior stability, long-lasting durability, and smooth tissue integration.",
          "Natural-Looking Volume: Subtle, seamless enhancement that restores lost volume while blending naturally with facial contours.",
          "Lasting Confidence: Engineered for high persistence to deliver dependable, long-term aesthetic results.",
          "Standard Packaging: Supplied in a 1 x 1 ml pre-filled syringe for optimal precision and effortless administration.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Specifications",
        items: [
          "Advanced Cross-Linked Hyaluronic Acid (24 mg/ml): High-purity cross-linked HA provides optimal volumetric support, smooth tissue integration, and superior long-lasting stability.",
          "Enhanced Patient Comfort (Lidocaine HCl 3 mg/ml): Formulated with lidocaine hydrochloride to reduce injection pain and ensure a comfortable, virtually pain-free treatment experience.",
          "Biocompatible Formulation (Phosphate-Buffered Saline): Suspended in a physiological phosphate-buffered saline solution to preserve structural integrity and ensure gentle tissue compatibility.",
          "Standard Single-Dose Packaging: Conveniently supplied in a 1.1 ml x 1 pre-filled syringe format designed for precise control and effortless administration.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "More Natural Results: Seamlessly integrates into soft tissue to deliver subtle, natural-looking volume and beautifully refined contours.",
          "High Plasticity & Anti-Deformation: Offers excellent moldability for precise shaping during application, paired with high resistance to deformation to maintain structural integrity over time.",
          "Collagen & Elastin Stimulation: Triggers natural skin regeneration by stimulating collagen and elastin synthesis, restoring fundamental firmness and elasticity to the skin.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "Instant Results: Delivers immediate, visible volume enhancement and wrinkle refinement right after administration.",
          "Intense Hydration: Deeply moisturizes the skin matrix from within, restoring natural radiance, plumpness, and skin suppleness.",
          "Natural Biocompatibility: Formulated with high-purity hyaluronic acid to ensure seamless tissue integration and minimal risk of adverse reactions.",
          "Advanced Cross-Linked HA: Features cross-linked hyaluronic acid technology for optimal structural support and long-lasting volume persistence.",
          "Convenient Packaging: Supplied in a 1 x 1.0 ml pre-filled syringe format for precise control and effortless handling.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "Premium Volume Solution: Advanced formulation designed to deliver high efficacy and superior volume enhancement for facial reshaping.",
          "Structural Support for Deep Wrinkles: Provides robust structural support to effectively lift and smooth deep lines and severe facial folds.",
          "Safe & Natural Results: Integrates seamlessly into soft tissue to achieve safe, harmonious, and natural-looking contours.",
          "Painless & Comfortable Treatment: Formulated for maximum patient comfort, ensuring a smooth and virtually painless injection experience.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "The Ultimate Skin Booster: Comprehensive skin-rejuvenating formula designed to restore skin health and vitalize overall quality from within.",
          "Deep Hydration & Radiance: Infuses intense moisture into skin layers while refining texture for a smooth, luminous glow.",
          "Elasticity & Firmness: Stimulates structural renewal to improve skin density, resilience, and firmness.",
          "Brightening & Whitening Care: Targets dullness and uneven tone to deliver a visibly clearer, brighter, and revitalized complexion.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "The Ultimate Brightening Ampoule: Advanced concentrated formula engineered to restore clarity, luminosity, and vitality to dull skin.",
          "Melanin Inhibition & Blemish Care: Targets pigment pathways to suppress melanin synthesis, reducing dark spots, blemishes, and hyperpigmentation.",
          "Radiant Glow & Luminous Complexion: Delivers deep illumination for a vibrant, inner-glow finish and a visibly healthy skin sheen.",
          "Even Skin Tone & Intense Brightening: Corrects discoloration and uneven patches to reveal a uniform, significantly brighter tone.",
          "Powerful Antioxidant Protection: Shields skin tissue against free radical damage and environmental stressors, preventing future dullness and aging.",
        ],
      },
    ],
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
    details: [
      {
        title: "Core Features & Highlights",
        items: [
          "Ultimate Salmon DNA (PDRN) Shot: Concentrated Polydeoxyribonucleotide (PDRN) formula derived from salmon DNA to accelerate skin revitalization at the cellular level.",
          "Cell Renewal & Structural Reinforcement: Stimulates cellular turnover and reinforces the skin's structural matrix for improved density and resilience.",
          "Total Repair Solution: Promotes tissue regeneration to repair damaged skin, soothe irritation, and restore optimal skin health.",
          "Barrier & Elasticity Synergy: Rebuilds the natural moisture barrier while boosting elasticity to firm, strengthen, and protect the skin.",
        ],
      },
    ],
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
