import { FaHeart, FaClock, FaUser, FaGamepad } from "react-icons/fa";
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
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden group">
          <Image
            src={coverImage}
            alt={title || ""}
            fill
            className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
            <div className="mt-2 flex justify-between items-center w-full text-sm text-zinc-300">
              <span>{author.name}</span>
              <span>{formatDate(date)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
