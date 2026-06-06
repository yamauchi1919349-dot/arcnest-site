import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";

const cardUrl = "https://arcnest.jp/card";

const services = [
  "勤怠管理システム",
  "キッチンカー管理システム（開発中）",
  "小規模ERP（開発予定）",
  "AI登山コンシェルジュ（開発中）"
];

export const metadata: Metadata = {
  title: "ArcNest Digital Card",
  description: "ArcNestのデジタル名刺ページです。"
};

export default async function CardPage() {
  const qrSvg = await QRCode.toString(cardUrl, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: {
      dark: "#0b1f3a",
      light: "#ffffff"
    }
  });

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-ink sm:px-8 sm:py-14">
      <section className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-line bg-white shadow-soft">
          <Image
            alt="ArcNest Logo"
            className="h-14 w-14 object-contain"
            height={56}
            priority
            src="/arcnest-logo.png"
            width={56}
          />
        </div>

        <p className="text-3xl font-bold tracking-normal text-ink">ArcNest</p>
        <p className="mt-3 text-base leading-7 text-slate-600">
          現場を支える、シンプルな業務システム。
        </p>

        <div className="mt-9 w-full rounded-2xl border border-line bg-mist px-6 py-7 shadow-soft">
          <p className="text-2xl font-bold text-ink">りょうすけ</p>
          <p className="mt-2 text-sm font-semibold text-navy">業務システム開発</p>
        </div>

        <div className="mt-6 w-full rounded-2xl border border-line bg-white p-6 text-left shadow-soft">
          <h2 className="text-sm font-bold text-gold">提供サービス</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            {services.map((service) => (
              <li className="flex gap-3" key={service}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid w-full gap-4 sm:grid-cols-2">
          <a
            className="rounded-2xl border border-line bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:border-navy/30"
            href="https://arcnest.jp"
          >
            <span className="text-xs font-bold text-gold">Website</span>
            <span className="mt-2 block text-sm font-semibold text-navy">arcnest.jp</span>
          </a>
          <Link
            className="rounded-2xl border border-line bg-navy p-5 text-left text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            href="/#contact"
          >
            <span className="text-xs font-bold text-sand">Contact</span>
            <span className="mt-2 block text-sm font-semibold">お問い合わせページへ</span>
          </Link>
        </div>

        <div className="mt-8 w-full rounded-2xl border border-line bg-white p-6 shadow-soft">
          <p className="text-sm font-bold text-ink">このページのQRコード</p>
          <div
            aria-label="https://arcnest.jp/card のQRコード"
            className="mx-auto mt-5 h-44 w-44 overflow-hidden rounded-xl border border-line bg-white p-3 [&_svg]:h-full [&_svg]:w-full"
            dangerouslySetInnerHTML={{ __html: qrSvg }}
            role="img"
          />
          <p className="mt-4 break-all text-xs text-slate-500">{cardUrl}</p>
        </div>
      </section>
    </main>
  );
}
