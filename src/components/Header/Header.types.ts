import { PaletteMode } from '@mui/material';

export type HeaderProps = {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
};
