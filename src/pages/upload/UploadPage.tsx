import React from 'react';
import { Options } from './components/options/Options';
import { Upload } from './components/upload/Upload';
import styles from './upload-page.module.scss';

export const UploadPage = () => {


  return (
    <div className={styles.container}>
      <Upload />
      <Options />
    </div>
  )
}
