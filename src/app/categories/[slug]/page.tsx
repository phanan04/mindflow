import Link from "next/link";
export default function CategoryPage() {
  return (
    <div className="w-[1000px] mx-auto h-auto">
      <h1 className="text-2xl font-bold text-center pb-4">ALL POSTS</h1>
      <div className="flex flex-row gap-4">
        <Link
          href="/categories/allposts"
          className="text-xl hover:text-blue-500"
        >
          All Posts
        </Link>
        <Link
          href="/categories/quick-easy"
          className="text-xl hover:text-blue-500"
        >
          Action
        </Link>
        <Link
          href="/categories/vegetarian"
          className="text-xl hover:text-blue-500"
        >
          Adventure
        </Link>
        <Link
          href="/categories/main-course"
          className="text-xl hover:text-blue-500"
        >
          RPG
        </Link>
      </div>
    </div>
  );
}
