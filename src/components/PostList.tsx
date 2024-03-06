import { Post } from "../types/post";
import { PostItem } from "./PostItem";
import '../styles/PostList.scss';

type Props = {
  posts: Post[];
  remove: (post: Post) => void;
}

export const PostList: React.FC<Props> = ({ posts, remove }) => {
  return (
    <div className="post-list">
      <div className="post-list__posts">
        {posts.map((post, i) => (
          <PostItem
            remove={remove}
            post={post}
            key={post.id}
            id={i + 1}
          />
        ))}
      </div>
    </div>
  )
}