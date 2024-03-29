import '../styles/PostItem.scss';
import { Post } from '../types/post';
import { MyButton } from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom'

type Props = {
  post: Post;
  id: number;
  remove: (post: Post) => void;
}

export const PostItem: React.FC<Props> = ({post, remove}) => {
  const {title, body, id} = post;
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${id}. ${title}`}</strong>
        <div>{body}</div>
      </div>
      
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  )
}