import { useMemo } from "react";
import { Post } from "../types/post";

export const useSortedPost = (
  posts: Post[],
  sort: keyof Post | '',
) => {
  const sortedPosts = useMemo(() => {
    if (sort !== '') {
      return [...posts].sort((a, b) => {
        return a[sort]
          .toString()
          .localeCompare(b[sort]
            .toString())
      })
    }

    return posts;
  }, [posts, sort]);

  return sortedPosts;
};

export const usePosts = (
  posts: Post[],
  sort: keyof Post | '',
  query: string,
) => {
  const sortedPosts = useSortedPost(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => {
      return post.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
}
