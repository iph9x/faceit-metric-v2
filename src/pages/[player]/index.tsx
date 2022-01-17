import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Maps, Player, Error } from 'src/components';

import Overview from 'src/components/Overview';
import { calcStat } from 'src/components/Overview/Overview.utils';
import { useAppSelector } from 'src/hooks/hooks';
import {
  fetchPlayer,
  fetchPlayerMatches,
  fetchPlayersList,
  fetchPlayerStats,
  TMatchStats,
} from 'src/services';
import { setPlayerThunk } from 'src/store/player/actions';
import { TLifetime, TMap, TPlayerInfo } from 'src/store/player/types';
import { TCurrentPage, TMapNames, TResults } from 'src/types';

type PropsTypes = {
  nickname: string;
  matches: TMatchStats[];
  newData: TPlayerInfo;
  lifetime: TLifetime;
  segments: TMap[]
  nicknames: string[];
  minElo: number;
  maxElo: number;
  errorC: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const nickname = ctx.query.player;

  if (typeof nickname === 'string') {
    try {
      const { data: { items: searchData } } = await fetchPlayersList(nickname);
      const targetNickname = searchData.find((player) => player.nickname.toLowerCase() === nickname.toLowerCase())?.nickname || '';
      const { data } = await fetchPlayer(targetNickname);

      if (!data.games?.csgo) {
        return {
          props: {},
        };
      }

      const newData = {
        player_id: data.player_id,
        nickname: data.nickname,
        avatar: data.avatar,
        country: data.country,
        cover_image: data.cover_image,
        skill_level: data.games.csgo.skill_level,
        faceit_elo: data.games.csgo.faceit_elo,
        game_player_name: data.games.csgo.game_player_name,
        friends_ids: data.friends_ids,
        steam_nickname: data.steam_nickname,
        memberships: data.memberships,
        faceit_url: data.faceit_url,
      };

      const { data: { lifetime, segments } } = await fetchPlayerStats(data.player_id);

      const pages = Math.ceil(Number(lifetime.Matches) / 2000);
      const matchesFetches = [];

      for (let page = 0; page < pages; page += 1) {
        matchesFetches.push(fetchPlayerMatches(data.player_id, Number(lifetime.Matches), page));
      }

      const values = await Promise.all(matchesFetches);
      const allMatches = values
        .map((value) => value.data)
        .reduce((prev, current) => [...prev, ...current], []);

      const nicknames = Array.from(new Set(allMatches.map((match) => match.nickname)));
      const eloList = allMatches.map((match) => Number(match.elo)).filter((elo) => !Number.isNaN(elo));

      return {
        props: {
          nickname: data.nickname,
          matches: allMatches.slice(0, 300) ?? [],
          newData,
          lifetime,
          segments,
          nicknames,
          minElo: Math.min.apply(null, eloList),
          maxElo: Math.max.apply(null, eloList),
        },
      };
    } catch {
      return {
        props: {
          errorC: 'Player is not found',
        },
      };
    }
  } else {
    return {
      props: {},
    };
  }
};

const PlayerOverview: NextPage<PropsTypes> = ({
  nickname,
  matches,
  newData,
  lifetime,
  segments,
  nicknames,
  minElo,
  maxElo,
  errorC = null,
}) => {
  const { player } = useAppSelector((store) => store);

  const [currentPage, setCurrentPage] = useState<TCurrentPage>('overview');
  const [matchesCount, setMatchesCount] = useState(20);
  const [isGeneralStats, setIsGeneralStats] = useState(true);
  const [mapFilter, setMapFilter] = useState<TMapNames>('all');
  const [resultFilter, setResultFilter] = useState<TResults>('all');

  const handledMatches = useMemo(() => matches?.map((match, ind) => ({
    ...match,
    eloDiff: matches[ind + 1]?.elo ? Number(match.elo) - Number(matches[ind + 1]?.elo) : 0,
  })) || [], [matches]);

  const filteredMatches = useMemo(
    () => {
      let localMatches: (TMatchStats & { eloDiff: number })[] = [...handledMatches];

      if (mapFilter !== 'all') {
        localMatches = handledMatches.filter((match) => match.i1.includes(mapFilter));
      }

      if (resultFilter !== 'all') {
        localMatches = localMatches.filter((match) => match.i10 === resultFilter);
      }

      return localMatches.slice(0, matchesCount);
    },
    [mapFilter, resultFilter, handledMatches, matchesCount],
  );

  const calcedStats = useMemo(() => calcStat(filteredMatches, filteredMatches.length), [filteredMatches]);

  const { playerInfo, maps, error } = useAppSelector((store) => store.player);

  const dispatch = useDispatch();

  useEffect(() => {
    if (matches) {
      dispatch(setPlayerThunk(
        matches,
        newData,
        lifetime,
        segments,
        nicknames,
        minElo,
        maxElo,
      ));
    }
  }, [dispatch, matches, newData, lifetime, segments, nicknames, minElo, maxElo]);

  if (errorC) {
    return <Error message={errorC} />;
  }

  return (
    <>
      <Player
        nickname={nickname}
        playerInfo={playerInfo}
        setMatchesCount={setMatchesCount}
        matchesCount={matchesCount}
        setIsGeneralStats={setIsGeneralStats}
        isGeneralStats={isGeneralStats}
        mapFilter={mapFilter}
        resultFilter={resultFilter}
        setResultFilter={setResultFilter}
        setMapFilter={setMapFilter}
        nicknames={nicknames}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === 'overview' && (
        <Overview
          {...player}
          nickname={nickname}
          matchesCount={matchesCount}
          isGeneralStats={isGeneralStats}
          mapFilter={mapFilter}
          resultFilter={resultFilter}
          matches={filteredMatches}
          calcedStats={calcedStats}
        />
      )}

      {currentPage === 'maps' && (
        <Maps nickname={nickname} maps={maps} error={error} />
      )}

      {/* {currentPage === 'charts' && (
        <Charts data={filteredMatches} matchesCount={matchesCount} />
      )} */}
    </>
  );
};

export default PlayerOverview;
