import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcnest.jp"),
  title: "ArcNest | 小さな事業のための業務アプリ開発",
  applicationName: "ArcNest",
  description:
    "ArcNestは、勤怠管理・業務管理・予約管理など、小規模事業者向けの使いやすい業務アプリを開発するブランドです。",
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/arcnest-logo.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ],
    shortcut: "/arcnest-logo.png",
    apple: [
      {
        url: "/arcnest-logo.png",
        sizes: "1024x1024",
        type: "image/png"
      }
    ]
  },
  appleWebApp: {
    capable: true,
    title: "ArcNest",
    statusBarStyle: "default"
  }
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a"
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
