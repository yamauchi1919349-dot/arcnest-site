import Image from "next/image";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "プロダクト", href: "#products" },
  { label: "不便シリーズ", href: "#side-project" },
  { label: "お問い合わせ", href: "#contact" }
];

const services = [
  {
    title: "勤怠管理アプリ開発",
    body: "スタッフの打刻、管理者確認、月次集計など、現場に合わせた勤怠管理を支援します。"
  },
  {
    title: "小規模業務アプリ開発",
    body: "予約管理、出店管理、在庫管理など、日々の業務に合わせたアプリを開発します。"
  },
  {
    title: "業務効率化サポート",
    body: "スプレッドシートや既存業務を整理し、シンプルで使いやすい仕組みに整えます。"
  }
];

function ArcNestIllustration() {
  return (
    <svg
      aria-label="アーチの先に道と業務アプリ画面が続く線画イラスト"
      className="h-auto w-full"
      fill="none"
      role="img"
      viewBox="0 0 560 420"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#F8FAFC" height="420" rx="32" width="560" />
      <path
        d="M114 322C160 250 197 213 280 213C363 213 400 250 446 322"
        stroke="#123766"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M159 322C191 274 220 252 280 252C340 252 369 274 401 322"
        stroke="#C5A15B"
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M250 322C239 352 226 377 211 398M310 322C321 352 334 377 349 398"
        stroke="#D8E0EA"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M223 397C247 387 266 382 280 382C294 382 313 387 337 397"
        stroke="#123766"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <rect height="126" rx="18" stroke="#123766" strokeWidth="6" width="168" x="196" y="70" />
      <path d="M220 109H340" stroke="#D8E0EA" strokeLinecap="round" strokeWidth="6" />
      <path d="M220 139H292" stroke="#D8E0EA" strokeLinecap="round" strokeWidth="6" />
      <rect fill="#F3EAD8" height="22" rx="7" width="54" x="220" y="158" />
      <rect fill="#123766" height="22" rx="7" width="44" x="286" y="158" />
      <path
        d="M88 346H472M92 346C128 346 142 327 156 305M468 346C432 346 418 327 404 305"
        stroke="#D8E0EA"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="140" cy="148" fill="#F3EAD8" r="18" />
      <circle cx="420" cy="184" fill="#F3EAD8" r="13" />
      <path d="M118 225H164M397 248H444" stroke="#C5A15B" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow ? <p className="mb-3 text-sm font-semibold text-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-line/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a className="inline-flex items-center gap-3 text-xl font-bold text-ink" href="#">
            <Image
              alt="ArcNest Logo"
              className="h-9 w-9 shrink-0 object-contain"
              height={36}
              priority
              src="/arcnest-logo.png"
              width={36}
            />
            ArcNest
          </a>
          <nav aria-label="主要ナビゲーション" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a className="transition hover:text-navy" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-gold/30 bg-sand/70 px-4 py-2 text-sm font-semibold text-navy">
            Small business app development
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            小さな事業のための、ちょうどいい業務アプリ開発。
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            ArcNestは、勤怠管理・業務管理・予約管理など、現場で使いやすい小規模システムを開発しています。
            必要な機能だけを、使いやすく。小さな事業の成長を支えるアプリをつくります。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
              href="https://timecard.arcnest.jp"
              rel="noopener noreferrer"
              target="_blank"
            >
              勤怠管理アプリを見る
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy hover:bg-mist"
              href="#contact"
            >
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="rounded-[28px] border border-line bg-white p-4 shadow-soft">
          <ArcNestIllustration />
        </div>
      </section>

      <section className="bg-white py-20" id="services">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading title="提供サービス" />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article className="rounded-2xl border border-line bg-white p-7 shadow-soft transition hover:-translate-y-1" key={service.title}>
                <div className="mb-6 h-1.5 w-12 rounded-full bg-gold" />
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20" id="products">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading title="プロダクト" />
          <article className="grid gap-8 rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold text-gold">Attendance Management</p>
              <h3 className="text-2xl font-bold text-ink">勤怠管理アプリ</h3>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                スタッフ打刻、管理者確認、月次集計、権限管理に対応した小規模事業者向けの勤怠管理システムです。
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink"
              href="https://timecard.arcnest.jp"
              rel="noopener noreferrer"
              target="_blank"
            >
              アプリを見る
            </a>
          </article>
        </div>
      </section>

      <section className="bg-white py-20" id="side-project">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Development Brand" title="開発ブランド" />
          <article className="rounded-2xl border border-line bg-white p-7 shadow-soft sm:p-9">
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-bold text-ink">不便シリーズ</h3>
              <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-navy">開発中</span>
            </div>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              便利すぎる時代に、あえて少し不便な体験を楽しむアプリシリーズです。
              ナビをしない地図アプリ「KAMIマップ」、翌日届くメッセージアプリ「手紙」などを開発予定です。
            </p>
          </article>
        </div>
      </section>

      <section className="bg-mist py-20" id="about">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading title="ArcNestについて" />
          <p className="max-w-4xl text-lg leading-9 text-slate-700">
            ArcNestは、小さな事業や個人事業の現場に合う業務アプリを開発するブランドです。
            大きすぎるシステムではなく、必要な機能をわかりやすくまとめた、使い続けやすいアプリを目指しています。
          </p>
        </div>
      </section>

      <section className="bg-white py-20" id="contact">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rounded-2xl bg-ink p-8 text-white shadow-soft sm:p-10">
            <div className="mb-10">
              <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">お問い合わせ</h2>
            </div>
            <p className="max-w-3xl leading-8 text-slate-200">
              業務アプリの相談、勤怠管理アプリの導入相談など、お気軽にご連絡ください。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
                href="#"
              >
                Xで相談する
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                href="mailto:support@arcnest.jp"
              >
                メールで相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="inline-flex items-center gap-2 font-bold text-ink">
            <Image
              alt="ArcNest Logo"
              className="h-7 w-7 shrink-0 object-contain"
              height={28}
              src="/arcnest-logo.png"
              width={28}
            />
            ArcNest
          </p>
          <p>© 2026 ArcNest. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
