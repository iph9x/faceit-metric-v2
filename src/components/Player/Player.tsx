import { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { TCurrentPage, TMapNames, TResults } from 'src/types';
import { Checkbox, FormControlLabel, NativeSelect } from '@mui/material';
import { PlayerProps } from './Player.types';
import styles from './Player.module.scss';
import { mapNames, matchesCounts, results } from './Player.consts';

const navigation: TCurrentPage[] = [
  'overview',
  'maps',
];

const Player: FC<PlayerProps> = ({
  nickname,
  playerInfo,
  matchesCount,
  setMatchesCount,
  isGeneralStats,
  setIsGeneralStats,
  mapFilter,
  setMapFilter,
  resultFilter,
  setResultFilter,
  nicknames,
  currentPage,
  setCurrentPage,
}) => {
  const handleMatchesCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMatchesCount(Number(e.target.value));
  };

  const handleMapFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setMapFilter(e.target.value as TMapNames);
  };

  const handleResultFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setResultFilter(e.target.value as TResults);
  };

  return (
    <section className={styles.playerWrapper}>
      <div className={styles.container}>
        <div className={styles.info}>
          <img src={playerInfo?.avatar || 'images/avatar.jpg'} alt="avatar" className={styles.avatar} />
          <div>
            <h2 className={styles.nicknameWrapper}>
              <div className={styles.nickname}>
                {nickname}
                {nicknames?.length > 1 && (
                  <>
                    <span className={styles.nicknameArrow} />
                    <ul className={styles.tooltip}>
                      {nicknames?.map((nick) => (
                        <li key={nick}>{nick}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </h2>
            <div className={styles.level}>
              LVL:
              {playerInfo?.skill_level}
            </div>
            <div className={styles.elo}>
              {playerInfo?.faceit_elo}
              {' '}
              elo
            </div>
            {/* Memberships: {playerInfo?.memberships} */}
          </div>
        </div>
        <div className={styles.nav}>
          {navigation.map((page) => (
            <button
              key={page}
              type="button"
              className={cn(styles.navButton, currentPage === page && styles.navButtonActive)}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        {currentPage !== 'maps' && (
          <div className={styles.filters}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 50, maxWidth: 80 }}>
              <InputLabel htmlFor="matches-count">Matches</InputLabel>
              <NativeSelect
                id="matches-count"
                value={String(matchesCount)}
                onChange={handleMatchesCountChange}
              >
                {matchesCounts.map((count) => (
                  <option key={count} value={count}>{count}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 80, maxWidth: 100 }}>
              <InputLabel htmlFor="map-filter">Map</InputLabel>
              <NativeSelect
                id="map-filter"
                value={mapFilter}
                onChange={handleMapFilterChange}
              >
                {mapNames.map((map) => (
                  <option key={map} value={map}>{map}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{
                m: 1, minWidth: 60, maxWidth: 80, marginRight: 4,
              }}
            >
              <InputLabel htmlFor="result-filter">Result</InputLabel>
              <NativeSelect
                id="result-filter"
                value={resultFilter}
                onChange={handleResultFilterChange}
              >
                {Object.entries(results).map(([key, value]) => (
                  <option key={key} value={value}>{key}</option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={!isGeneralStats}
                  onChange={() => setIsGeneralStats(!isGeneralStats)}
                />
              )}
              label={`last ${matchesCount} matches`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Player;
