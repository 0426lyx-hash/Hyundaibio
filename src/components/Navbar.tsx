import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function Navbar({ locale, messages }: { locale: Locale; messages: Messages }) {
  const n = messages.navigation;
  const navigation = [
    {
      label: n.about,
      href: `/${locale}/about`,
      children: [
        { label: n.overview, href: `/${locale}/about` },
        { label: n.ceo, href: `/${locale}/about/ceo-message` },
        { label: n.network, href: `/${locale}/about/global-network` },
      ],
    },
    {
      label: n.products,
      href: `/${locale}/products`,
      children: [
        { label: n.allProducts, href: `/${locale}/products` },
        { label: n.toxin, href: `/${locale}/products#tox` },
        { label: n.fillers, href: `/${locale}/products#dermal-fillers` },
        { label: n.skinCare, href: `/${locale}/products#skin-care` },
      ],
    },
    {
      label: n.activities,
      href: `/${locale}/news`,
      children: [
        { label: n.companyNews, href: `/${locale}/news` },
        { label: n.events, href: `/${locale}/news#events` },
      ],
    },
    { label: n.blogs, href: `/${locale}/news`, children: [] },
    { label: n.contact, href: `/${locale}/contact`, children: [] },
  ];

  return (
    <header className="site-header">
      <div className="announcement">{n.announcement}</div>
      <div className="header-main">
        <Link href={`/${locale}`} className="brand" aria-label="Hyundai Bio home">
          <span className="brand-name">HYUNDAI BIO</span>
          <span className="brand-caption">medical aesthetics</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <Link href={item.href} className="nav-link">{item.label}</Link>
              {item.children.length ? (
                <div className="nav-dropdown">
                  {item.children.map((child) => <Link key={child.label} href={child.href}>{child.label}</Link>)}
                </div>
              ) : null}
            </div>
          ))}
          <span className="shop-note">{n.shop}</span>
        </nav>
        <div className="header-tools">
          <LocaleSwitcher locale={locale} />
          <Link href={`/${locale}/products`} className="header-tool-link">{n.products}</Link>
          <details className="mobile-menu">
            <summary>{n.menu}</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
