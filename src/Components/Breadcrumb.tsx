"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  category?: { uid: string; name: string };
  postTitle?: string;
};
export default function Breadcrumb({ category, postTitle }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 text-sm text-zinc-500 dark:text-zinc-400"
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link
            href="/"
            className="hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            Home
          </Link>
        </li>
        <ChevronRight size={14} />

        {category && (
          <>
            <li>
              <Link
                href={`/categories/${category.uid}`}
                className="hover:text-zinc-800 dark:hover:text-zinc-200"
              >
                {category.name}
              </Link>
            </li>
            <ChevronRight size={14} />
          </>
        )}

        {postTitle && (
          <li className="text-zinc-700 dark:text-zinc-300">{postTitle}</li>
        )}
      </ol>
    </nav>
  );
}
