import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import SearchButton from "@/app/search/SearchButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My blog",
  description: "nextgame blog"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-zinc-900 dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
            <main className="p-2 dark:bg-zinc-900 dark:text-white">
              {children}
              <SpeedInsights />
            </main>
          <SearchButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
