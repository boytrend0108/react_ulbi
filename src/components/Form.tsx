import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import { useRef, useState } from "react";
import '../styles/Form.scss';
import { Post } from "../types/post";

type Props = {
  onSubmit: (post: Post) => void;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [post, setPost] = useState({title: '', body: ''})

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    if (!newPost.body || !newPost.title) {
      console.log("Error");
      
      return;
    };
  
    onSubmit(newPost);

    setPost({title: '', body:''});
  }

  const bodyInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='form'>
      <MyInput
        value={post.title}
        type="text"
        placeholder='title'
        onChange={title => setPost({...post, title})}
      />

      {/* for expample add ref */}
      <MyInput
        ref={bodyInputRef}
        onChange={body => setPost({...post, body})}
        value={post.body}
        type="text"
        placeholder='description'
      />

      <MyButton
        onClick={event => handleSubmit(event)}
      >
        Create Post
      </MyButton>
    </form>
  )
};
