import React, { FC } from 'react';
import { Button } from '../button/Button';
import { IButton } from '../IButton';
import styles from './upload-button.module.scss';


export const UploadButton: FC<IButton> = ({disabled}) => {
  

  return (
    <Button
      leftIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
          <path d="M15.4933 6.45915L15.2803 7.01298L15.8622 7.12902C17.3709 7.42984 18.5 8.7463 18.5 10.3125C18.5 12.1014 17.029 13.5625 15.2 13.5625H4.275C2.1839 13.5625 0.5 11.8906 0.5 9.84375C0.5 8.22674 1.54816 6.84531 3.01984 6.33468L3.37359 6.21194L3.35534 5.83794C3.35185 5.76631 3.35 5.69535 3.35 5.625C3.35 3.31752 5.2455 1.4375 7.6 1.4375C9.17748 1.4375 10.5507 2.28342 11.2862 3.53971L11.5639 4.01421L12.01 3.69275C12.3614 3.43952 12.8003 3.3125 13.3 3.3125C14.6066 3.3125 15.65 4.3313 15.65 5.625C15.65 5.91774 15.5942 6.19687 15.4933 6.45915Z" 
          stroke="#017D73"
          />
        </svg>
      }
      customClassName={styles.container}
    >
      <div className={styles.text}>
        Upload
      </div>
    </Button>
  )
}
