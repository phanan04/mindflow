import { lazy, Suspense } from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

// Lazy load các components không critical để giảm blocking time
const Header = lazy(() => import("@/Components/Header"));
const Footer = lazy(() => import("@/Components/Footer"));

export const metadata: Metadata = {
  title: "GameFlow - Blog Game Việt Nam",
  description: "Blog game Việt Nam với tin tức, đánh giá và nội dung chất lượng",
  // Thêm viewport cho mobile optimization
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* DNS prefetch cho external images để load nhanh hơn */}
        <link rel="dns-prefetch" href="//images.prismic.io" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body className="dark:bg-black dark:text-white">
        <div className="min-h-screen bg-white/95 dark:bg-black flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={<div className="h-20 bg-white dark:bg-black" />}>
              <Header />
            </Suspense>
              <main className="dark:bg-transparent dark:text-white flex-1">
                {children}
              </main>
            <Suspense fallback={<div className="h-32 bg-zinc-50 dark:bg-zinc-900" />}>
              <Footer />
            </Suspense>
            {/* Di chuyển SpeedInsights để không block initial render */}
            <SpeedInsights />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
