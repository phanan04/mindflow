import { createClient } from "./prismicio";
import { isFilled } from "@prismicio/helpers";
import { asText } from "@prismicio/client";

export const revalidate = 30

export async function getPosts() {
  const client = createClient();
  const posts = await client.getAllByType("post", {
    fetchLinks: ["author.name", "author.avatar"],
    fetchOptions: {
      next: {
        tags: ["posts"]
      }
    }
  });

  return posts.map((post) => {
    return {
      id: post.id,
      uid: post.uid,
      slug: post.uid,
      title: typeof post.data.title === 'string' ? post.data.title : asText(post.data.title) || '',
      excerpt: typeof post.data.excerpt === 'string' ? post.data.excerpt : asText(post.data.excerpt) || '',
      coverImage: post.data.coverImage?.url ?? "/fallback.jpg",
      date: post.data.date ?? new Date().toISOString(),
      author: {
        name: isFilled.contentRelationship(post.data.author) && post.data.author.data?.name ? 
              post.data.author.data.name : 'Unknown Author',
        avatar: isFilled.contentRelationship(post.data.author) && post.data.author.data?.avatar?.url ? 
                post.data.author.data.avatar.url : undefined,
      },
    };
  });
}
