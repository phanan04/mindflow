import { createClient } from "./prismicio";
import { asText } from "@prismicio/helpers";

export async function getPosts() {
  const client = createClient();
  const posts = await client.getAllByType("post", {
    fetchLinks: ["author.name", "author.avatar"],
  });

  return posts.map((post) => ({
    id: post.id,
    uid: post.uid,
    slug: post.uid,
    title: asText(post.data.title),
    excerpt: asText(post.data.excerpt),
    coverImage: post.data.coverImage?.url ?? "/fallback.jpg",
    date: post.data.date ?? new Date().toISOString(),
    author: {
      name: post.data.author && 'data' in post.data.author && post.data.author.data?.name ? post.data.author.data.name : undefined,
      avatar: post.data.author && 'data' in post.data.author && post.data.author.data?.avatar?.url ? post.data.author.data.avatar.url : undefined,
    },
  }));
}
