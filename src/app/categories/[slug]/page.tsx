import Link from "next/link";
export default function CategoryPage() {
    return (
        <div className="w-[1000px] mx-auto h-auto">
            <h1 className="text-2xl font-bold text-center pb-4">ALL POSTS</h1>
            <div className="flex flex-row gap-4">
                <Link href="/categories/allposts" className="text-xl hover:text-black">All Posts</Link>
                <Link href="/categories/quick-easy" className="text-xl hover:text-black">Quick & Easy</Link>
                <Link href="/categories/vegetarian" className="text-xl hover:text-black">Vegetarian</Link>
                <Link href="/categories/main-course" className="text-xl hover:text-black">Main Course</Link>
            </div>
        </div>
    );
}