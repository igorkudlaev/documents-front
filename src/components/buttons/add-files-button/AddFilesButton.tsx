import React, { FC } from 'react';
import { Button } from '../button/Button';
import { IButton } from '../IButton';
import styles from './add-files.button.module.scss';

export const AddFilesButton: FC<IButton> = () => {

  return (
    <Button 
      customClassName={styles.container}
      leftIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M7.42857 4.57143V0.928572C7.42857 0.415736 7.01284 0 6.5 0C5.98716 0 5.57143 0.415736 5.57143 0.928572V4.57143C5.57143 5.12371 5.12371 5.57143 4.57143 5.57143H0.928572C0.415736 5.57143 0 5.98716 0 6.5C0 7.01284 0.415736 7.42857 0.928572 7.42857H4.57143C5.12371 7.42857 5.57143 7.87629 5.57143 8.42857V12.0714C5.57143 12.5843 5.98716 13 6.5 13C7.01284 13 7.42857 12.5843 7.42857 12.0714V8.42857C7.42857 7.87629 7.87629 7.42857 8.42857 7.42857H12.0714C12.5843 7.42857 13 7.01284 13 6.5C13 5.98716 12.5843 5.57143 12.0714 5.57143H8.42857C7.87629 5.57143 7.42857 5.12371 7.42857 4.57143Z" fill="#2EB4FF"/>
        </svg>
      }
    >
      <div className={styles.text}>
        Add files
      </div>
    </Button>
  )
}
