"use client";
import { formatDate } from "@/lib/formatDate";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type ArticleCardProps = {
  slug: string;
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
  slug,
  title,
  excerpt,
  coverImage,
  author,
  date,
}: ArticleCardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    
      <section className="flex flex-col bg-white w-full max-w-[1000px] h-auto mx-auto border ">
        <Link href={`/blog/${slug}`}>
          <div className="flex flex-row bg-white border dark:border-black">
            <div className="md:w-1/2">
              <Image
                src={coverImage}
                width={500}
                height={300}
                alt={title}
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between border  dark:bg-white dark:text-black ">
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
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
  );
}

