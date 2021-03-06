import { ChangeEvent, useEffect, FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { isDOMUsable } from 'src/utils';

import SearchPlayerInput from '../SearchPlayerInput';

import styles from './Header.module.scss';
import { changeThemeToDark, changeThemeToLight } from './Header.utils';
import { HeaderProps } from './Header.types';

const Header: FC<HeaderProps> = ({
  mode,
  setMode,
}) => {
  const handleThemeCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (!checked) {
      changeThemeToLight();
      setMode('light');
    } else {
      changeThemeToDark();
      setMode('dark');
    }
  };

  useEffect(() => {
    if ((isDOMUsable() && localStorage.getItem('data-theme')) === 'dark') {
      changeThemeToDark();
      setMode('dark');
    } else {
      changeThemeToLight();
      setMode('light');
    }
  }, [setMode]);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" passHref>
            <img src="/images/logo.png" width="45" height="45" alt="" className={styles.logo} />
          </Link>
          <SearchPlayerInput />
          <input
            id="theme"
            type="checkbox"
            name="theme"
            className={styles.checkbox}
            checked={mode === 'dark'}
            onChange={handleThemeCheckboxChange}
          />
          <label htmlFor="theme" className={styles.label}>
            <span className={styles.toggleDark}>🌚</span>
            <span className={styles.toggleLight}>🌞</span>
          </label>
        </div>
      </header>
    </>
  );
};

export default Header;
