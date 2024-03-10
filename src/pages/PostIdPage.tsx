import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostServise";
import { Post } from "../types/post";
import { MyLoader } from "../components/UI/loader/MyLoader";
import { PostComment } from "../types/comment";

export const PostIdPage = () => {
  const { id } = useParams();
  console.log(id)
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<PostComment[]>([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id: string) => {
    const response = await PostService.getById(id);

    setPost(response);
  });

  const [fetchComments, isComLoading, errorCom] = useFetching(async (id: string) => {
    const response = await PostService.getCommentsById(id);

    setComments(response);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, [id])

  return (
    <div style={{padding: 20}}>
      <h1>post {id} page</h1>

      {isLoading
        ? <MyLoader />
        : <h1>{post?.id}: {post?.title}</h1>
      }

      {isComLoading
        ? <MyLoader />
        :
        <div>
          {comments.map(c => (
            <div key={c.id} style={{marginTop: 10}}>
              <h5><strong>{c.email}</strong></h5>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}