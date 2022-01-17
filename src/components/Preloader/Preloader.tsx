import { FC } from 'react';

import styles from './Preloader.module.scss';

const Preloader: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.preloader}>
      <img src="/images/preloader.svg" alt="loading" className={styles.karambit} />
    </div>
  </div>
);

export default Preloader;
