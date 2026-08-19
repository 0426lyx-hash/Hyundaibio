import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  const n = messages.navigation;
  const f = messages.footer;

  return (
    <footer className="site-footer">
      <div className="footer-main page-container">
        <div>
          <p className="footer-brand">HYUNDAI BIO</p>
          <p className="footer-copy">{f.copy}</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-heading">{f.company}</p>
            <Link href={`/${locale}/about`}>{n.overview}</Link>
            <Link href={`/${locale}/about/ceo-message`}>{n.ceo}</Link>
            <Link href={`/${locale}/news`}>{n.companyNews}</Link>
          </div>
          <div>
            <p className="footer-heading">{n.products}</p>
            <Link href={`/${locale}/products#tox`}>{n.toxin}</Link>
            <Link href={`/${locale}/products#dermal-fillers`}>{n.fillers}</Link>
            <Link href={`/${locale}/products#cosmetics`}>{n.cosmetics}</Link>
          </div>
          <div>
            <p className="footer-heading">{f.contact}</p>
            <Link href={`/${locale}/contact/inquiry`}>{f.general}</Link>
            <a href="tel:+821024158525">+82-10-2415-8525</a>
            <a href="mailto:mariobio@naver.com">mariobio@naver.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom page-container">
        <span>© 2026 Hyundai Bio. All rights reserved.</span>
        <span>{f.privacy}</span>
      </div>
    </footer>
  );
}
