import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcnest.jp"),
  title: "ArcNest | Small systems. Better fields.",
  applicationName: "ArcNest",
  description:
    "ArcNestは、現場から生まれる小さな仕組みをつくるプロダクトスタジオです。勤怠管理、記録管理、タスク整理など、毎日の仕事が少し楽になる道具を作っています。",
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
  themeColor: "#ffffff"
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
