import Header from "@/Components/Header";
import ShareButtons from "@/Components/ShareButtons";
import "./globals.css";
import ArticleCard from "@/Components/ArticleCard";
import { LayoutContainer } from "@/Components/LayoutContainer";
import Footer from "@/Components/Footer";

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
        <main className="p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
