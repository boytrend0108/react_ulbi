import { Post } from "../types/post";
import { PostItem } from "./PostItem";
import '../styles/PostList.scss';

type Props = {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="post-list">
      <h1 className="post-list__title">Post List</h1>

      <div className="post-list__posts">
        {posts.map(post => (<PostItem post={post} key={post.id}/>))}
      </div>
    </div>
  )
}