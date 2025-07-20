import Header from "@/Components/Header";
import ShareButtons from "@/Components/ShareButtons";
import "./globals.css";
import ArticleCard from "@/Components/ArticleCard";
import { LayoutContainer } from "@/Components/LayoutContainer";

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
        <LayoutContainer>
          <ArticleCard />
        </LayoutContainer>
      </body>
    </html>
  );
}
