import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://taiwanbuyway.tw"),
  title: {
    default: "台灣百味 Taiwan Buy Way｜從產地到餐桌",
    template: "%s｜台灣百味 Taiwan Buy Way",
  },
  description: "台灣百味是聚焦在地農產與地方品牌的選品平台，分享從產地到餐桌的真實故事與安心食材。",
  keywords: ["台灣農產品", "在地品牌", "小農選品", "放牧鮮蛋", "台灣米", "產地直送"],
  openGraph: {
    title: "台灣百味 Taiwan Buy Way",
    description: "從產地到餐桌，發現台灣每一個值得被看見的在地故事。",
    locale: "zh_TW",
    type: "website",
    images: ["/images/hero-farm.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
