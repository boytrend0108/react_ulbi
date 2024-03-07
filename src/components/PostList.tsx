import { Post } from "../types/post";
import { PostItem } from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../styles/PostList.scss';

type Props = {
  posts: Post[];
  remove: (post: Post) => void;
}

export const PostList: React.FC<Props> = ({ posts, remove }) => {
  if (!posts.length) {
    return (
      <div className="notification is-primary">
        <strong>There are no posts</strong>
      </div>
    )
  }

  return (
    <div className="post-list">
      <div>
        <TransitionGroup className="post-list__posts">
          {posts.map((post, i) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post" // later we'll use it
            >
              <PostItem
                remove={remove}
                post={post}
                id={i + 1}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}