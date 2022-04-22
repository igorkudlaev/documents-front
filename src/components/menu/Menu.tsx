import React from 'react';
import { MenuItem } from './MenuItem';
import styles from './menu.module.scss';

export const Menu = () => {
  return (
    <nav className={styles.container}>
      <MenuItem to={'/'}>
        Search
      </MenuItem>
      <MenuItem to={'/search'}>
        Stats
      </MenuItem>
      <MenuItem to={'/upload'}>
        Upload
      </MenuItem>
    </nav>
  ) 
}