import React from 'react';
import type { ReactNode, MouseEvent } from 'react';
import classes from './styles.module.scss';

interface iButton {
  children: ReactNode | ReactNode[];
  type: 'primary' | 'secondary';
  action?: (e: MouseEvent) => void;
}

function Button({ type, action = () => {}, children }: iButton) {
  return (
    <button
      className={`${classes[type]} ${classes.button}`}
      onClick={action}>
      {children}
    </button>
  );
}

export default Button;
