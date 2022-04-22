import React from 'react';
import { AddFilesButton } from '../../../../components/buttons/add-files-button/AddFilesButton';
import { UploadButton } from '../../../../components/buttons/upload-button/UploadButton';
import { ShadowContainer } from '../../../../components/container/ShadowContainer';
import styles from './upload.module.scss';

export const Upload = () => {
  return (
    <ShadowContainer customClassName={styles.container}>
      <div className={styles.header}>
        <h1>Upload</h1>
        <div className={styles.buttonsWrapper}>
          <AddFilesButton />
          <UploadButton />
        </div>
        

      </div>
      
      
    </ShadowContainer>
  )
}
