import ArticleCard from "./ArticleCard";
import ShareButtons from "./ShareButtons";

export default function Footer() {
  return (
    <footer className="flex flex-row  overflow-hidden bg-white w-full max-w-[1000px] h-[200px] mx-auto mt-4 mb-0 px-4">
      <div className="flex flex-col w-1/2 gap-4 p-4 bg-white">
        <h1>SUBSCRIBE VIA EMAIL</h1>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-white">
        <h3>Enter your email here</h3>
        <input type="email" className="py-2 px-4 w-120 border" />
        <label className="flex items-center space-x-2">
          <input type="checkbox" value="Subscribe" />
          <span>Yes, subscribe me to your newsletter</span>
        </label>
        <button className="bg-black text-white py-2">
          Subscribe
        </button>
      </div>
    </footer>
  );
}
