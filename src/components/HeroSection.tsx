const HERO_VIDEO = "https://pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev/product/tox/botatoxhero.mp4";

export function HeroSection() {
  return (
    <section className="home-hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-label="BOTATOX Korean Beauty Hero Film">
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
    </section>
  );
}
