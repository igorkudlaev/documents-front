import React from 'react';
import { ShadowContainer } from '../../../../components/container/ShadowContainer';
import styles from './options.module.scss';
import { OptionsItem } from './OptionsItem';

export const Options = () => {
  return (
    <ShadowContainer customClassName={styles.container}>
      <h3>Options</h3>
      <div className={styles.items}>
        <OptionsItem>Extracting text</OptionsItem>
        <OptionsItem>OCR</OptionsItem>
      </div>
    </ShadowContainer>
  )
}
