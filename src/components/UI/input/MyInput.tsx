import React, { ChangeEvent, forwardRef } from 'react';
import classes from './MyInput.module.scss';

type Props = {
  type: string;
  placeholder: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MyInput = forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, value, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes.myInput}
      />
    );
  }
);
