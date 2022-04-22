import React, { FC, useState } from 'react';
import styles from './switch.module.scss';

type PropsType = {
  onSwitch?: (value: boolean) => void;
  defaultValue?: boolean;
}

export const Switch: FC<PropsType> = ({onSwitch, defaultValue=false}) => {
  const [enabled, setEnabled] = useState(defaultValue);

  const onClick = () => {
    setEnabled((value) => {
      onSwitch?.(!value);
      return !value;
    });
  }

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={enabled ? styles.lineEnabled : styles.line} />
      <div className={enabled ? styles.pointEnabled : styles.point} />
    </div>
  )
}
