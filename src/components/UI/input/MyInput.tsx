import { forwardRef } from 'react';
import classes from './MyInput.module.scss';

type Props = {
  type: string;
  placeholder: string;
  value?: string;
  onChange: (e: string) => void;
};

export const MyInput = forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, value, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={classes.myInput}
      />
    );
  }
);
