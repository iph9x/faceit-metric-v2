import { FC } from 'react';

import { ErrorProps } from './Error.types';
import styles from './Error.module.scss';

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>{message}</h1>
    </div>
  );
};

export default Error;
