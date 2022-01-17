import { FC } from 'react';
import Head from 'next/head';

import { useAppSelector } from 'src/hooks/hooks';

import { MapsProps } from './Maps.types';
import styles from './Maps.module.scss';
import MapItem from './MapItem';

const Maps: FC<MapsProps> = ({ nickname, maps, error }) => {
  const { isFetching } = useAppSelector((store) => store.player);

  if (isFetching) {
    return <div style={{ fontSize: '55px' }}>...Loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        <title>
          FACEIT-METRIC -
          {nickname}
        </title>
        <meta name="description" content="maps stats" />
      </Head>
      <div className={styles.container}>
        {maps?.filter((map) => map.mode === '5v5').sort((a, b) => Number(b.stats.Matches) - Number(a.stats.Matches)).map((map) => (
          <MapItem
            key={map.img_regular}
            stats={map.stats}
            img_small={map.img_small}
            label={map.label}
          />
        ))}
      </div>
    </>
  );
};

export default Maps;
