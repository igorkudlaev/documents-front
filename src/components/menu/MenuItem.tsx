import React, { FC } from 'react';
import { NavLink, LinkProps, matchRoutes, useLocation, useRoutes } from 'react-router-dom';
import styles from './menu-item.module.scss';

export const MenuItem: FC<LinkProps> = (props) => {
  return (
    <NavLink 
      className={({isActive}) => isActive ? styles.itemActive : styles.item}
      {...props}
      >
      {props.children}
    </NavLink>
  )
};
