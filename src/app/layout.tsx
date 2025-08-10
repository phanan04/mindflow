import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
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
      <body className="dark:bg-zinc-900 dark:text-white bg-cover bg-center bg-fixed bg-no-repeat" 
            style={{backgroundImage: "url('/assets/images/bg-1.jpg')"}}>
        <div className="min-h-screen bg-white/90 dark:bg-zinc-900/90 flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
              <main className="p-2 dark:bg-transparent dark:text-white flex-1">
                {children}
                <SpeedInsights />
              </main>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
