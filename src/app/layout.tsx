import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import SearchButton from "@/Components/SearchButton";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "My Blog",
  description: "Blog powered by Next.js + Prismic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-2">
          {children}
          <SpeedInsights />
        </main>
        <SearchButton />
        <Footer />
      </body>
    </html>
  );
}
