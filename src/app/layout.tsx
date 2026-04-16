import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { CustomThemeProvider } from "@/components/custom-theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import MousePointer from "@/components/common/mouse-pointer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "garlatonic.cv | 박상아",
  description:
    "주니어 프론트엔드 개발자 박상아의 포트폴리오입니다. React, Next.js 기반의 웹 프론트엔드를 개발하며, 사용자 경험과 인터렉션에 중점을 두고 다양한 프로젝트를 진행했습니다.",
  keywords: [
    "프론트엔드 개발자",
    "포트폴리오",
    "웹 개발",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "프로젝트 경험",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={twMerge("**:tracking-tight", notoSansKR.className)}>
        <CustomThemeProvider>
          <TooltipProvider>
            {children}
            <MousePointer />
          </TooltipProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
