"use client";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaClock, FaGamepad, FaUser } from "react-icons/fa";

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
    <article className="group bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-2/5 relative overflow-hidden">
            <div className="h-48 md:h-full relative">
              <Image
                src={coverImage}
                fill
                alt={title || "Gaming Article"}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="md:w-3/5 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <FaUser size={12} />
                  <span>{author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock size={12} />
                  <span>{formatDate(date)}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-slate-100 group-hover:text-zinc-700 dark:group-hover:text-slate-200 transition-colors duration-200">
                {title}
              </h2>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-zinc-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {excerpt}
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-slate-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-slate-400">
                  <FaGamepad size={12} />
                  <span>Game</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-700 dark:text-slate-300 group-hover:text-zinc-900 dark:group-hover:text-slate-100 transition-colors duration-200">
                  <span className="text-sm font-medium">Xem Thêm</span>
                  <FaArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
