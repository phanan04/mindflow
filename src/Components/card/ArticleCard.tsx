"use client";
import { formatDate } from "@/lib/formatDate";
import { FaGamepad, FaClock, FaUser, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  slug: string;
  title: string | null;
  excerpt: string | null;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
};

export default function ArticleCard({
  slug,
  title,
  excerpt,
  coverImage,
  author,
  date,
}: ArticleCardProps) {
  return (
    <article className="group bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] overflow-hidden border border-gray-100 dark:border-zinc-700">
      <Link href={`/blog/${slug}`} className="block">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Container */}
          <div className="md:w-2/5 relative overflow-hidden">
            <div className="aspect-[4/3] md:h-full relative">
              <Image
                src={coverImage}
                fill
                alt={title || "Gaming Article"}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gaming Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 z-10">
                <FaGamepad size={12} />
                GAMING
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent md:bg-gradient-to-t md:from-transparent md:via-transparent md:to-transparent"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-zinc-800">
            <div className="space-y-4">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FaUser size={12} className="text-purple-600" />
                  <span className="font-medium">{author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaClock size={12} className="text-purple-600" />
                  <span>{formatDate(date)}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {title}
              </h2>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                  {excerpt}
                </p>
              )}
            </div>

            {/* Call to Action */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <FaGamepad className="text-purple-600" size={12} />
                  <span className="font-medium">Game Article</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  <span className="text-sm font-semibold">Xem Thêm</span>
                  <FaArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Effect Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </Link>
    </article>
  );
}
