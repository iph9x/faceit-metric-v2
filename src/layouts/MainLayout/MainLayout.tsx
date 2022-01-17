import {
  createContext, FC, useMemo, useState,
} from 'react';
import Head from 'next/head';

import { Header } from 'src/components';

import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import styles from './MainLayout.module.scss';

export const ThemeContext = createContext(true);

const MainLayout: FC = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = useMemo(() => createTheme({
    palette: { mode },
  }), [mode]);

  return (
    <>
      <Head>
        <title>FACEIT-METRIC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.layout}>
        <div className={styles.headerContainer}>
          <Header mode={mode} setMode={setMode} />
        </div>
        <ThemeProvider theme={theme}>
          <main className={styles.main}>
            {children}
          </main>
        </ThemeProvider>
      </div>
    </>
  );
};

export default MainLayout;