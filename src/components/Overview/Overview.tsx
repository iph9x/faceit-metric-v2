import { FC } from 'react';
import Head from 'next/head';

import cn from 'classnames';
import { calcHLTV } from 'src/utils/stats';
import { OverviewProps } from './Overview.types';
import styles from './Overview.module.scss';

const Overview: FC<OverviewProps> = ({
  nickname,
  isFetching,
  lifetime,
  matches,
  error,
  maps,
  minElo,
  maxElo,
  matchesCount,
  isGeneralStats,
  calcedStats,
}) => {
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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h3 className={styles.overviewTitle}>{isGeneralStats ? 'General stats' : `Last ${matchesCount} matches`}</h3>
        {isGeneralStats && (
          <div className={styles.overview}>
            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>{lifetime?.Matches}</span>
                <span className={styles.statName}>Matches</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>highest Elo:</span>
                <span className={styles.statValue}>{maxElo}</span>

                <span className={styles.statName}>lowest Elo:</span>
                <span className={styles.statValue}>{minElo}</span>

                <span className={styles.statName}>Max Win Streak:</span>
                <span className={styles.statValue}>{lifetime?.['Longest Win Streak']}</span>

              </div>
            </div>

            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>
                  {lifetime?.['Win Rate %']}
                  %
                </span>
                <span className={styles.statName}>Win rate</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>Total Wins:</span>
                <span className={styles.statValue}>{lifetime?.Wins}</span>

                <span className={styles.statName}>Total Losses:</span>
                <span className={styles.statValue}>
                  {lifetime && (Number(lifetime.Matches) - Number(lifetime.Wins))}
                </span>
              </div>
            </div>

            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>{lifetime?.['Average K/D Ratio']}</span>
                <span className={styles.statName}>K/D</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>Kills:</span>
                <span className={styles.statValue}>
                  {maps?.reduce((prev, cur) => Number(prev) + Number(cur.stats.Kills), 0)}
                </span>

                <span className={styles.statName}>Deaths:</span>
                <span className={styles.statValue}>
                  {maps?.reduce((prev, cur) => Number(prev) + Number(cur.stats.Deaths), 0)}
                </span>

                <span className={styles.statName}>Assists:</span>
                <span className={styles.statValue}>
                  {maps?.reduce((prev, cur) => Number(prev) + Number(cur.stats.Assists), 0)}
                </span>

                <span className={styles.statName}>HS:</span>
                <span className={styles.statValue}>
                  {lifetime?.['Average Headshots %']}
                  %
                </span>

              </div>
            </div>
          </div>

        )}

        {!isGeneralStats && matches.length > 0 && (
          <div className={styles.overview}>
            {/* TODO: calc longest winstreak */}
            {/* Longest Win Streak: {lifetime?.['Longest Win Streak']} */}
            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>
                  {calcedStats.winRate}
                  %
                </span>
                <span className={styles.statName}>Win rate</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>highest Elo:</span>
                <span className={styles.statValue}>{calcedStats.maxElo}</span>
                <span className={styles.statName}>lowest Elo:</span>
                <span className={styles.statValue}>{calcedStats.minElo}</span>
                <span className={styles.statName}>mvps:</span>
                <span className={styles.statValue}>{calcedStats.mvp}</span>
                <span className={styles.statName}>HS:</span>
                <span className={styles.statValue}>
                  {calcedStats.hsPercent}
                  %
                </span>
              </div>
            </div>

            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>{calcedStats.avgHLTV}</span>
                <span className={styles.statName}>hltv</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>K/D:</span>
                <span className={styles.statValue}>{calcedStats.kd}</span>

                <span className={styles.statName}>K/R:</span>
                <span className={styles.statValue}>{calcedStats.kr}</span>

                <span className={styles.statName}>avg. Kills:</span>
                <span className={styles.statValue}>{calcedStats.avgKills}</span>

                <span className={styles.statName}>avg. Deaths:</span>
                <span className={styles.statValue}>{calcedStats.avgDeaths}</span>

                <span className={styles.statName}>avg. Assists:</span>
                <span className={styles.statValue}>{calcedStats.avgAssists}</span>

              </div>
            </div>

            <div className={styles.statsBox}>
              <div className={styles.statsHeader}>
                <span className={styles.statValue}>{calcedStats.kills}</span>
                <span className={styles.statName}>Kills</span>
              </div>
              <div className={styles.statsList}>
                <span className={styles.statName}>Deaths:</span>
                <span className={styles.statValue}>{calcedStats.deaths}</span>

                <span className={styles.statName}>Assists:</span>
                <span className={styles.statValue}>{calcedStats.assists}</span>

                <span className={styles.statName}>3K:</span>
                <span className={styles.statValue}>{calcedStats.triple}</span>

                <span className={styles.statName}>4K:</span>
                <span className={styles.statValue}>{calcedStats.quad}</span>

                <span className={styles.statName}>5K:</span>
                <span className={styles.statValue}>{calcedStats.penta}</span>

              </div>
            </div>
          </div>
        )}

        {!isGeneralStats && matches.length === 0 && (
          <span>no info</span>
        )}

        <div className={styles.matches}>
          <div className={styles.matchesHeader}>
            <div className={cn(styles.statItem, styles.number)}>#</div>
            <div className={cn(styles.statItem, styles.result)}>W/L</div>
            <div className={cn(styles.statItem, styles.elo)}>elo</div>
            <div className={cn(styles.statItem, styles.score)}>score</div>
            <div className={cn(styles.statItem, styles.kda)}>kda</div>
            <div className={cn(styles.statItem, styles.kr)}>kr</div>
            <div className={cn(styles.statItem, styles.kd)}>kd</div>
            <div className={cn(styles.statItem, styles.hs)}>hs</div>
            <div className={cn(styles.statItem, styles.map)}>map</div>
            <div className={cn(styles.statItem, styles.date)}>date</div>
            <div className={cn(styles.statItem, styles.team)}>team</div>
            <div className={cn(styles.statItem, styles.hltv)}>hltv</div>
          </div>
        </div>
        {matches?.map((match, ind) => {
          const eloDif = match.eloDiff && (match.eloDiff > 0 ? `+${match.eloDiff}` : match.eloDiff);
          const HLTVRating = calcHLTV({
            kills: Number(match.i6),
            rounds: Number(match.i12),
            deaths: Number(match.i8),
            triple: Number(match.i14),
            quadro: Number(match.i15),
            penta: Number(match.i16),
          });
          const isNoEloMatch = Number.isNaN(Number(eloDif)) || eloDif === 0;

          const kdClasses = cn(styles.statItem, {
            [styles.green]: Number(match.c2) > 1,
            [styles.red]: Number(match.c2) < 1,
          });
          const HLTVClasses = cn(styles.statItem, {
            [styles.green]: Number(HLTVRating) > 1,
            [styles.red]: Number(HLTVRating) < 1,
          });
          const resultClasses = cn(styles.statItem, {
            [styles.green]: Number(match.i10),
            [styles.red]: !Number(match.i10),
          });
          const eloDifClasses = cn(styles.eloDiff, {
            [styles.green]: Number(eloDif) > 0,
            [styles.red]: Number(eloDif) < 0,
          });
          const displayebleEloDif = isNoEloMatch ? '' : eloDif;

          return (
            <div key={match._id.matchId} className={styles.matchItem}>
              <div className={cn(styles.statItem, styles.number)}>{ind + 1}</div>
              <div className={resultClasses}>{Number(match.i10) ? 'W' : 'L'}</div>
              <div className={cn(styles.statItem, styles.elo)}>
                {match.elo}
                <span className={eloDifClasses}>
                  {match.elo ? displayebleEloDif : '-'}
                </span>
              </div>
              <div className={cn(styles.statItem, styles.score)}>{match.i18}</div>
              <div className={cn(styles.statItem, styles.kda)}>
                {match.i6}
                {' '}
                -
                {match.i7}
                {' '}
                -
                {match.i8}
              </div>
              <div className={cn(styles.statItem, styles.kr)}>{match.c3}</div>
              <div className={kdClasses}>{match.c2}</div>
              <div className={cn(styles.statItem, styles.hs)}>{match.c4}</div>
              <div className={cn(styles.statItem, styles.map)}>{match.i1.split('/').slice(-1)}</div>
              <div className={cn(styles.statItem, styles.date)}>
                <div>{new Date(match.created_at).toLocaleDateString()}</div>
                <div>
                  {new Date(match.created_at).toLocaleTimeString().split(':').slice(0, 2)
                    .join(':')}
                </div>
              </div>
              <div className={cn(styles.statItem, styles.team)}>
                {match.i5.includes('team_') ? match.i5.slice(5) : match.i5}
              </div>
              <div className={HLTVClasses}>{HLTVRating}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Overview;
