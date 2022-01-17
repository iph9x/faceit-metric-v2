import { TMap, TMapStats } from 'src/store/player/types';

export type MapsProps = {
  nickname: string;
  maps: TMap[] | null;
  error: string | null;
};

export type MapItemProps = {
  stats: TMapStats;
  img_small: string;
  label: string;
};
