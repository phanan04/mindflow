"use client";
import { formatDate } from "@/lib/formatDate";
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
    <section
      className="flex flex-col bg-white w-full max-w-[1000px] h-auto mx-auto 
  border border-gray-100 dark:border-zinc-800 overflow-hidden 
  shadow hover:shadow-2xl hover:border-gray-300 transition-all duration-300"
    >
      <Link href={`/blog/${slug}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 overflow-hidden">
            <Image
              src={coverImage}
              width={500}
              height={300}
              alt={title || ""}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div
            className="md:w-1/2 p-6 flex flex-col justify-between 
        dark:bg-white dark:text-black"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width={24}
                    height={24}
                    alt={author.name}
                    className="rounded-full"
                  />
                )}
                <p className="font-medium">{author.name}</p>
              </div>
              <p className="text-sm text-gray-500">{formatDate(date)}</p>
              <h2 className="text-black text-xl font-semibold hover:text-blue-600 transition-colors duration-200">
                {title}
              </h2>
              <p className="text-gray-700 line-clamp-3">{excerpt}</p>
            </div>

            <div className="mt-4 border-t pt-2 text-sm text-gray-500">
              Đọc thêm →
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
