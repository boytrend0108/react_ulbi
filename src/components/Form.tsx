import { MyButton } from "./UI/button/MyButton";
import { MyInput } from "./UI/input/MyInput";
import '../styles/Form.scss';

export const Form = () => {
  return (
    <form className='form'>
      <MyInput type="text" placeholder='title' />
      <MyInput type="text" placeholder='description' />
      <MyButton disabled>Create Post</MyButton>
    </form>
  )
};
