import ArticleCard from "@/Components/ArticleCard";
import { LayoutContainer } from "@/Components/LayoutContainer";

export default function HomePage() {
  return (
    <div className="w-[1000px] mx-auto h-[300px] overflow-hidden">
      <h1 className="text-black	text-center text-3xl py-4">Food Blog</h1>
      <ArticleCard />
    </div>
  );
}
