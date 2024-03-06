import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import { useRef, useState } from "react";
import '../styles/Form.scss';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    setTitle('');
    setBody('');
    console.log(bodyInputRef.current?.value || 'null' )
  }

  const bodyInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='form'>
      <MyInput
        value={title}
        type="text"
        placeholder='title'
        onChange={event => setTitle(event.target.value)}
      />

      <MyInput
        ref={bodyInputRef}
        onChange={event => setBody(event.target.value)}
        value={body}
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
