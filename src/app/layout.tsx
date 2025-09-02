import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ScrollToTop from "@/Components/ScrollToTop";

export const metadata: Metadata = {
  title: "GameFlow - Blog Game Việt Nam",
  description:
    "Blog game Việt Nam với tin tức, đánh giá và nội dung chất lượng",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512", 
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="//images.prismic.io" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
      </head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <div className="min-h-screen  flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="dark:bg-transparent flex-1">
              {children}
              <ScrollToTop />
            </main>
            <Footer />
            <SpeedInsights />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
