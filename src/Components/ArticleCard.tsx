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
    
      <section className="flex flex-col bg-white w-full max-w-[1000px] h-auto mx-auto">
        <Link href={`/blog/${slug}`}>
          <div className="flex flex-row bg-white border">
            <div className="md:w-1/2">
              <Image
                src={coverImage}
                width={500}
                height={300}
                alt={title}
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-between">
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

interface LikeButtonProps {
  postId: string;
}

export function LikeButton({ postId }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likedStored = localStorage.getItem(`like-${postId}`) === "true";
    const likeCount = parseInt(
      localStorage.getItem(`like-count-${postId}`) || "0"
    );

    setLiked(likedStored);
    setLikes(likeCount);
  }, [postId]);

  const toggleLike = () => {
    const newLiked = !liked;
    const newCount = newLiked ? likes + 1 : Math.max(0, likes - 1);

    setLiked(newLiked);
    setLikes(newCount);

    localStorage.setItem(`like-${postId}`, newLiked.toString());
    localStorage.setItem(`like-count-${postId}`, newCount.toString());
  };

  return (
    <div className="flex items-center space-x-2">
      <button onClick={toggleLike}>
        <FaHeart
          className={`text-xl cursor-pointer transition-colors ${
            liked
              ? "text-red-600 hover:text-red-700"
              : "text-gray-400 hover:text-red-500"
          }`}
        />
      </button>
      <span>{likes}</span>
    </div>
  );
}
