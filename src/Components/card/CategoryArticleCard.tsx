import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type CategoryArticleCardProps = {
  slug: string;
  title: string;
  excerpt: string;
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

    <div className="bg-white border overflow-hidden">
      <Link href={`/blog/${slug}`}>
        {/* Cover Image */}
        <div className="aspect-video relative">
          <Image src={coverImage} fill alt={title} className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
            {category && (
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {category}
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>

            {/* Author and Meta */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-200 mb-0">
              <div className="flex items-center space-x-2">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    width={20}
                    height={20}
                    alt={author.name}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-gray-500">{author.name}</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <span>{formatDate(date)}</span>
                <FaHeart className="hover:text-red-500 cursor-pointer transition-colors" />
              </div>  
            </div>  
        </div>
      </Link>
    </div>
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
