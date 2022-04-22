import classNames from 'classnames';
import React, { FC, ReactNode } from 'react'
import styles from './shadow-container.module.scss';

type PropsType = {
  children?: ReactNode;
  customClassName?: string;
}

export const ShadowContainer: FC<PropsType> = ({children, customClassName}) => {

  return (
    <div className={classNames(styles.container, customClassName)}>{children}</div>
  )
}
