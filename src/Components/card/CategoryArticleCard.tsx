import { FaHeart, FaGamepad, FaClock, FaUser } from "react-icons/fa";
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
}: CategoryArticleCardProps) {
  return (
    <article className="group bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-gray-100 dark:border-zinc-700">
      <Link href={`/blog/${slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={coverImage}
            alt={title || "Gaming Article"}
            fill
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gaming Badge */}
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FaGamepad size={12} />
            GAMING
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                {title}
              </h3>
              {excerpt && (
                <p className="text-sm text-gray-200 line-clamp-2 opacity-90">
                  {excerpt}
                </p>
              )}
              
              {/* Meta Information */}
              <div className="flex justify-between items-center text-xs text-gray-300">
                <div className="flex items-center gap-1">
                  <FaUser size={10} />
                  <span className="font-medium">{author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock size={10} />
                  <span>{formatDate(date)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effect Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Card Footer */}
        <div className="p-4 bg-gray-50 dark:bg-zinc-800 border-t border-gray-100 dark:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <FaGamepad className="text-purple-600" size={12} />
              <span className="font-medium">Game Review</span>
            </div>
            <div className="text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
              <span className="text-sm font-semibold">Xem Thêm →</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
