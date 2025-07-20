import { FaHeart } from "react-icons/fa";
import Image from "next/image";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
};

export default function ArticleCard({
  title,
  excerpt,
  coverImage,
  author,
  date,
}: ArticleCardProps) {
  return (
    <section className="flex flex-column bg-white w-full max-w-[1000px] h-auto mx-auto">
      <div className="flex flex-row bg-white border">
        <div className="md:w-1/2">
          <Image src={coverImage} width={500} height={300} alt={title} className="object-cover" />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              {author.avatar && (
                <Image src={author.avatar} width={24} height={24} alt={author.name} className="rounded-full" />
              )}
              <p>{author.name}</p>
            </div>
            <p className="text-sm text-gray-500">{formatDate(date)}</p>
            <h2 className="text-black text-xl font-semibold">{title}</h2>
            <p>{excerpt}</p>
          </div>
          <div>
            <hr />
            <div className="flex flex-row justify-between text-sm pt-2">
              <p>40 views</p>
              <FaHeart className="hover:text-red-600 cursor-pointer text-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
