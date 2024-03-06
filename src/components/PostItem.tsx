import '../styles/PostItem.scss';
import { Post } from '../types/post';

type Props = {
  post: Post;
  id: number;
}

export const PostItem: React.FC<Props> = ({post, id}) => {
  const {title, body} = post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${id}. ${title}`}</strong>
        <div>{body}</div>
      </div>
      
      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  )
}