import Image from "next/image";
import Reveal from "./Reveal";
import PhilosophyVideoSection from "./PhilosophyVideoSection";

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
            <p className="hero-brand" aria-label="ArcNest">
              <span className="brand-letter brand-letter--major brand-letter--a" aria-hidden="true">
                A
              </span>
              <span className="brand-letter brand-letter--minor brand-letter--r" aria-hidden="true">
                r
              </span>
              <span className="brand-letter brand-letter--minor brand-letter--c" aria-hidden="true">
                c
              </span>
              <span className="brand-letter brand-letter--major brand-letter--n" aria-hidden="true">
                N
              </span>
              <span className="brand-letter brand-letter--minor brand-letter--e" aria-hidden="true">
                e
              </span>
              <span className="brand-letter brand-letter--minor brand-letter--s" aria-hidden="true">
                s
              </span>
              <span className="brand-letter brand-letter--major brand-letter--t" aria-hidden="true">
                t
              </span>
            </p>
          </Reveal>

          <span className="scroll-cue">Scroll to explore</span>
        </div>
      </section>

      <section className="philosophy-section" id="philosophy">
        <Reveal className="hero-note-panel reveal-delay-two">
          <div className="philosophy-visual">
            <p className="philosophy-image-copy">
              <span>Start small.</span>
              <span>小さな改善から、</span>
              <span>仕事は大きく変わる。</span>
            </p>
            <div className="hero-note-image" aria-hidden="true" />
          </div>
          <div className="hero-note">
            <p>
              現場を支える、
              <br />
              小さな仕組みをつくる。
              <br />
              <br />
              便利なシステムは、
              <br />
              必ずしも大きく複雑である必要はありません。
              <br />
              <br />
              現場には、
              <br />
              毎日の中に小さな「困った」があります。
              <br />
              <br />
              少し面倒な記録。
              <br />
              何度も入力する同じ情報。
              <br />
              昔から続いている紙やExcelの管理。
              <br />
              <br />
              でも多くの場合、
              <br />
              その不便は当たり前になっていて、
              <br />
              何を変えればいいのか、
              <br />
              まだ形になっていません。
              <br />
              <br />
              ArcNestは、
              <br />
              まず小さな道具をつくります。
              <br />
              <br />
              完成された答えを押し付けるのではなく、
              <br />
              現場に寄り添い、
              <br />
              実際に使う人の声を聞きながら、
              <br />
              一緒に考え、一緒に改善し、
              <br />
              その場所に合った仕組みへ育てていく。
              <br />
              <br />
              昔の町工場が、
              <br />
              使う人の手に合わせて、
              <br />
              ひとつひとつ道具を調整していたように。
              <br />
              <br />
              AIの時代だからこそ、
              <br />
              効率だけではなく、
              <br />
              そこで働く人や仕事の流れを大切にしたい。
              <br />
              <br />
              ArcNestは、
              <br />
              現場と共につくり、
              <br />
              共に育てる、
              <br />
              小さなプロダクトスタジオです。
            </p>
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

      <PhilosophyVideoSection />

      <section className="contact-section" id="contact">
        <Reveal className="contact-inner">
          <p className="contact-word" aria-label="ArcNest">
            <span className="brand-letter contact-letter contact-letter--major contact-letter--a1" aria-hidden="true">
              A
            </span>
            <span className="brand-letter contact-letter contact-letter--minor contact-letter--r" aria-hidden="true">
              r
            </span>
            <span className="brand-letter contact-letter contact-letter--minor contact-letter--c1" aria-hidden="true">
              c
            </span>
            <span className="brand-letter contact-letter contact-letter--major contact-letter--n" aria-hidden="true">
              N
            </span>
            <span className="brand-letter contact-letter contact-letter--minor contact-letter--e" aria-hidden="true">
              e
            </span>
            <span className="brand-letter contact-letter contact-letter--minor contact-letter--s" aria-hidden="true">
              s
            </span>
            <span className="brand-letter contact-letter contact-letter--major contact-letter--t2" aria-hidden="true">
              t
            </span>
          </p>
          <div className="contact-actions">
            <a className="contact-button" href="mailto:support@arcnest.jp">
              Contact
            </a>
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

