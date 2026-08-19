import { MediaPlaceholder } from "@/components/media-placeholder";
import Image from "next/image";
import type { Locale } from "@/i18n/config";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: string[];
  locale?: Locale;
  heroImage?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  sections,
  locale = "en",
  heroImage,
}: PageShellProps) {
  return (
    <>
      {heroImage && (
        <div className="page-hero-image">
          <Image src={heroImage} alt={title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        </div>
      )}
      <section className="page-hero">
        <div className="page-container">
          <p className="section-kicker light">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </section>
      <section className="page-container product-detail">
        <MediaPlaceholder
          label={`${title} ${locale === "zh" ? "图片 / 视频" : locale === "ko" ? "이미지 / 영상" : "IMAGE / VIDEO"}`}
          ratio="4:3"
        />
        <div className="information-list">
          {sections.map((section, index) => (
            <div key={section}>
              <span>{String(index + 1).padStart(2, "0")} · {section}</span>
              <small>{locale === "zh" ? "内容待补充" : locale === "ko" ? "내용 준비 중" : "Content pending"}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
