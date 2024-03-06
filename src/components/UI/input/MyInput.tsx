import classes from './MyInput.module.scss';
type Props = {
  type: string;
  placeholder: string;
};

export const MyInput: React.FC<Props> = (props) => {
  return (
    <input {...props} className={classes.myInput}/>
  )
}