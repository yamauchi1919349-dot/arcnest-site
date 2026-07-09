import Image from "next/image";
import Reveal from "./Reveal";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" }
];

const products = [
  {
    number: "01",
    title: "Timecard",
    subtitle: "Simple attendance management.",
    lines: ["毎日の打刻から、", "スタッフ管理、月次集計まで。", "現場で迷わず使える勤怠管理。"],
    status: "準備中",
    image: "/images/products/timecard.png"
  },
  {
    number: "02",
    title: "Gibier Trace",
    subtitle: "Record life correctly.",
    lines: ["命の記録を、", "未来へつなぐ。", "個体管理・衛生管理・トレーサビリティを", "ひとつの流れへ。"],
    href: "#contact",
    image: "/images/products/gibier-trace.png"
  },
  {
    number: "03",
    title: "TaskOrbit",
    subtitle: "Find your next action.",
    lines: ["時間に追われるのではなく、", "今やるべきことを整える。", "新しい形のタスク管理。"],
    href: "#contact",
    image: "/images/products/taskorbit.png"
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="site-logo" href="#top" aria-label="ArcNest home">
          ArcNest
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-inner">
          <Reveal className="hero-brand-wrap">
            <p className="hero-brand">ArcNest</p>
          </Reveal>

          <Reveal className="hero-note-panel reveal-delay-two">
            <div className="hero-note-image" aria-hidden="true" />
            <div className="hero-note">
              <p>
                現場を支える、
                <br />
                小さな仕組みをつくる。
                <br />
                <br />
                余計なものを増やすのではなく、
                <br />
                毎日の仕事が少し楽になる道具を。
                <br />
                <br />
                ArcNestは、
                <br />
                現場から生まれるプロダクトスタジオです。
              </p>
            </div>
          </Reveal>

          <span className="scroll-cue">Scroll to explore</span>
        </div>
      </section>

      <section className="text-section" id="about">
        <Reveal>
          <div className="section-grid">
            <SectionLabel>About</SectionLabel>
            <div className="section-body">
              <h2>
                Not bigger.
                <br />
                Just better.
              </h2>
              <p className="body-poem">
                大きなシステムが、
                <br />
                必ず良いとは限りません。
                <br />
                <br />
                本当に必要なのは、
                <br />
                現場に自然となじみ、
                <br />
                迷わず使えること。
                <br />
                <br />
                ArcNestは、
                <br />
                小さな課題を見つけ、
                <br />
                シンプルな仕組みに変えていきます。
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="products-section" id="products">
        <Reveal>
          <div className="section-grid section-grid--wide">
            <SectionLabel>Products</SectionLabel>
            <div className="products-list" aria-label="ArcNest products">
              <h2>Products</h2>
              {products.map((product) => {
                const productContent = (
                  <>
                    <span className="product-number">{product.number}</span>
                    <span className="product-copy">
                      <span className="product-title-wrap">
                        <span className="product-title">{product.title}</span>
                        {"status" in product ? (
                          <span className="product-status">{product.status}</span>
                        ) : null}
                      </span>
                      <span className="product-subtitle">{product.subtitle}</span>
                      <span className="product-description">
                        {product.lines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </span>
                    </span>
                    <span className="product-space" aria-hidden="true">
                      <Image
                        alt=""
                        className="product-image"
                        fill
                        sizes="(max-width: 900px) calc(100vw - 6rem), 28vw"
                        src={product.image}
                      />
                    </span>
                  </>
                );

                const productHref = "href" in product ? product.href : undefined;

                return productHref ? (
                  <a
                    className="product-row"
                    href={productHref}
                    key={product.number}
                    rel={productHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    target={productHref.startsWith("http") ? "_blank" : undefined}
                  >
                    {productContent}
                  </a>
                ) : (
                  <div className="product-row" key={product.number}>
                    {productContent}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="text-section" id="philosophy">
        <Reveal>
          <div className="section-grid">
            <SectionLabel>Philosophy</SectionLabel>
            <div className="section-body">
              <h2>
                Less system.
                <br />
                More flow.
              </h2>
              <p className="body-poem">
                システムを増やすことが、
                <br />
                改善ではない。
                <br />
                <br />
                人の流れ、
                <br />
                仕事の流れを止めない。
                <br />
                <br />
                そんな静かな道具を作ります。
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="contact-section" id="contact">
        <Reveal>
          <div className="contact-inner">
            <SectionLabel>Contact</SectionLabel>
            <div>
              <h2>Start small.</h2>
              <p>
                小さな改善から、
                <br />
                仕事は変わる。
              </p>
              <a className="contact-button" href="mailto:support@arcnest.jp">
                Contact
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="site-footer">
        <p className="footer-brand">ArcNest</p>
        <nav aria-label="Footer navigation">
          <a href="#products">Products</a>
          <a href="#about">Company</a>
          <a href="#contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </nav>
        <p>© ArcNest</p>
      </footer>
    </main>
  );
}
