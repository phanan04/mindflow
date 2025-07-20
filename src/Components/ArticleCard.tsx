import { FaHeart } from "react-icons/fa";

export default function ArticleCard() {
    return (
        <>
        <section className="flex flex-column overflow-hidden bg-white w-[1000] h-[300] mx-auto">
            {/*Food card */}
            <div className="flex flex-row overflow-hidden bg-white ">
            {/* Image */}
                <div className="md:w-1/2">
                    <img src="/assets/images/article_1.avif" alt="article_1"></img>
                </div>
                {/* Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <img ></img>
                        <div className="flex flex-col">
                            {/* Author */}
                            <p>Admin</p>
                            <p>Mar 22, 2023 2 min read</p>
                        </div>
                        <div className="text-black text-xl">Miracle no-knead bread</div>
                        <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        <div>
                            <hr></hr>
                            <div className="flex flex-row justify-between">
                                <p>40 views</p>
                                <div><FaHeart className="hover:text-red-600 cursor-pointer text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button className="bg-black text-white px-4 py-2 flex mx-auto mt-5">All Posts</button>
        </>
    );
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}
