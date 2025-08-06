import { createClient } from "@/lib/prismicio";
import * as prismic from "@prismicio/client";

export async function getPostByKeyword(query?: string) {
  const client = createClient();

  if (!query || query.trim() === "") return [];

  const [byTitle, byExcerpt] = await Promise.all([
    client.getAllByType("post", {
      predicates: [prismic.predicate.fulltext("my.post.title", query),],
    }),
    client.getAllByType("post", {
      predicates: [prismic.predicate.fulltext("my.post.excerpt", query)],
    }),
  ]);

  const allPostsMap = new Map();

  [...byTitle, ...byExcerpt].forEach((post) => {
    allPostsMap.set(post.id, post);
  });

  const posts = Array.from(allPostsMap.values());

  posts.sort((a, b) => {
    const dateA = new Date(a.data.date || 0).getTime();
    const dateB = new Date(b.data.date || 0).getTime();
    return dateB - dateA;
  });

  return posts;
}
