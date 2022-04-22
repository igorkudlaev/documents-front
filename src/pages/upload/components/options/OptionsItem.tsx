import React, { FC } from 'react'
import { Switch } from '../../../../components/switch/Switch'
import styles from './options.module.scss';

type PropsType = {
  children?: React.ReactNode;
}

export const OptionsItem: FC<PropsType> = ({children}) => {

  return (
    <div className={styles.item}>
      <div className={styles.itemText}>
        {children}
      </div>
      <Switch />
    </div>
  )
}
