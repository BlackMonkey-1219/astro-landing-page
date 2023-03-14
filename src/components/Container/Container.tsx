import React from 'react';
import type { ReactNode } from 'react';
import classes from './style.module.scss';

interface iContainer {
  children: ReactNode | ReactNode[];
}

function Container({ children }: iContainer) {
  return <div className={classes.container}>{children}</div>;
}

export default Container;
