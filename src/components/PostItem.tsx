import '../styles/PostItem.scss';
import { Post } from '../types/post';
import { MyButton } from './UI/button/MyButton';

type Props = {
  post: Post;
  id: number;
  remove: (post: Post) => void;
}

export const PostItem: React.FC<Props> = ({post, id, remove}) => {
  const {title, body} = post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${id}. ${title}`}</strong>
        <div>{body}</div>
      </div>
      
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}