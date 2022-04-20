import React, { FC } from 'react';
import styles from './switch.module.scss';

type PropsType = {
  enabled?: Boolean;
  onSwitch?: () => void;
}

export const Switch: FC<PropsType> = ({enabled, onSwitch}) => {

  return (
    <div className={styles.container} onClick={onSwitch}>
      <div className={styles.line}>

      </div>
      <div className={styles.point}>

      </div>
    </div>
  )
}
