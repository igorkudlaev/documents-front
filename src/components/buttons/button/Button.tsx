import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './button.module.scss';

type PropsType = {
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  customClassName?: string;
}

export const Button: FC<PropsType> = ({leftIcon, children, ...rest}) => {


  return (
    <button className={classNames(styles.container, rest.customClassName)}>
      { leftIcon }
      { children }
    </button>
  )
}
