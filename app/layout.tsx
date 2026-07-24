import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hangli-ai.example"),
  title: "航理科技｜企业 AI 应用创新伙伴",
  description: "帮助传统知识密集型组织发现 AI 价值，加速智能化转型。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "航理科技｜企业 AI 应用创新伙伴",
    description: "从 AI 认知、场景发现、方案设计到试点验证，推动 AI 从技术概念走向实际业务价值。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
