import React, { FC, ReactNode } from 'react'
import styles from './shadow-container.module.scss';

type PropsType = {
  children?: ReactNode
}

export const ShadowContainer: FC<PropsType> = ({children}) => {

  return (
    <div className={styles.container}>{children}</div>
  )
}
