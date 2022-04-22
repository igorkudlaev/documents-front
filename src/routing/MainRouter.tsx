import React from 'react';
import styles from './main-router.module.scss';
import { Menu } from '../components/menu/Menu';
import { Outlet } from 'react-router-dom';

export const MainRouter = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Outlet />
    </div>
  )
}
