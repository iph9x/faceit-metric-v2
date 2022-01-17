import { FC } from 'react';

import styles from './MapItem.module.scss';
import { MapItemProps } from './Maps.types';

const MapItem: FC<MapItemProps> = ({
  stats,
  img_small,
  label,
}) => (
  <li className={styles.mapItem}>
    <div className={styles.mapTitleWrapper}>
      <img src={img_small} alt={label} />
      <span>{label}</span>
    </div>
    <div className={styles.statsWrapper}>
      <ul className={styles.card}>
        <li className={styles.cardItem}>
          <span className={styles.statValue}>{stats.Matches}</span>
          <span className={styles.statTitle}>Matches</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Win Rate %:</span>
          <span className={styles.statValue}>{stats['Win Rate %']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Wins:</span>
          <span className={styles.statValue}>{stats.Wins}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>MVPs:</span>
          <span className={styles.statValue}>{stats.MVPs}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Rounds:</span>
          <span className={styles.statValue}>{stats.Rounds}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. MVPs:</span>
          <span className={styles.statValue}>{Math.round(Number(stats['Average MVPs']))}</span>
        </li>
      </ul>
      <ul className={styles.card}>
        <li className={styles.cardItem}>
          <span className={styles.statValue}>{stats['Average K/D Ratio']}</span>
          <span className={styles.statTitle}>K/D</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>K/R:</span>
          <span className={styles.statValue}>{stats['Average K/R Ratio']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. Kills:</span>
          <span className={styles.statValue}>{Math.round(Number(stats['Average Kills']))}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. Assists:</span>
          <span className={styles.statValue}>{Math.round(Number(stats['Average Assists']))}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. Deaths:</span>
          <span className={styles.statValue}>{Math.round(Number(stats['Average Deaths']))}</span>
        </li>
      </ul>
      <ul className={styles.card}>
        <li className={styles.cardItem}>
          <span className={styles.statValue}>{stats.Kills}</span>
          <span className={styles.statTitle}>Kills</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Assists:</span>
          <span className={styles.statValue}>{stats.Assists}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Deaths:</span>
          <span className={styles.statValue}>{stats.Deaths}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>3 Kills:</span>
          <span className={styles.statValue}>{stats['Triple Kills']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>4 Kills:</span>
          <span className={styles.statValue}>{stats['Quadro Kills']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>5 Kills:</span>
          <span className={styles.statValue}>{stats['Penta Kills']}</span>
        </li>
      </ul>
      <ul className={styles.card}>
        <li className={styles.cardItem}>
          <span className={styles.statValue}>
            {stats['Average Headshots %']}
            %
          </span>
          <span className={styles.statTitle}>Avg. HS</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>HS per Match:</span>
          <span className={styles.statValue}>{stats['Headshots per Match']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. 3 Kills:</span>
          <span className={styles.statValue}>{stats['Average Triple Kills']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. 4 Kills:</span>
          <span className={styles.statValue}>{stats['Average Quadro Kills']}</span>
        </li>
        <li className={styles.cardItem}>
          <span className={styles.statTitle}>Avg. 5 Kills:</span>
          <span className={styles.statValue}>{stats['Average Penta Kills']}</span>
        </li>
      </ul>
    </div>
  </li>
);

export default MapItem;
