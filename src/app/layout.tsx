import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArcNest | 小さな事業のための業務アプリ開発",
  description:
    "ArcNestは、勤怠管理・業務管理・予約管理など、小規模事業者向けの使いやすい業務アプリを開発するブランドです。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
