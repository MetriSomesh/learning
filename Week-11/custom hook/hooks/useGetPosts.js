import { useEffect } from "react";
import { useState } from "react";

export function useGetPosts() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await res.json();

    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}
