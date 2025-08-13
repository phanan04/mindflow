import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

type CategoryArticleCardProps = {
  slug: string;
  title: string | null;
  excerpt: string | null;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  category?: string;
};

export default function CategoryArticleCard({
  slug,
  title,
  excerpt,
  coverImage,
  author,
  date,
  category,
}: CategoryArticleCardProps) {
  return (
    <div className="rounded-lg border border-transparent shadow-md hover:shadow-2xl transition-all duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-video md:rounded-lg overflow-hidden group">
          <Image
            src={coverImage}
            alt={title || ""}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="mt-2 text-2xl font-bold">{title}</h3>
            {excerpt && (
              <p className="text-sm text-gray-200 md:line-clamp-2">
                {excerpt}
              </p>
            )}
            <div className="mt-2 flex justify-between text-xs text-gray-400">
              <span>By {author.name}</span>
              <span>{formatDate(date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
