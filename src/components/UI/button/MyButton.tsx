import classes from './MyButton.module.scss';

type Props = {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const MyButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={classes.myBtn}
    >
      {children}
    </button>
  )
}