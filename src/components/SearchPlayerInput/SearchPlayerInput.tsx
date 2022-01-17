import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  FC,
} from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import useDebounce from 'src/hooks/useDebounce';
import useClickOutside from 'src/hooks/useClickOutside';
import { fetchPlayersList, TPlayersListItem } from 'src/services';

import styles from './SearchPlayerInput.module.scss';

const SearchPlayerInput: FC = () => {
  const [value, setValue] = useState('');
  const [isOpened, setOpened] = useState(false);
  const [players, setPlayers] = useState<TPlayersListItem[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const router = useRouter();

  const inputRef = useClickOutside(() => setOpened(false));
  const debounce = useDebounce();

  const handleClear = () => {
    setPlayers([]);
    setValue('');
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    handleClear();
    router.push(`/${value}`);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlePlayerPick = (nickname: string) => {
    handleClear();
    router.push(`/${nickname}`);
  };

  useEffect(() => {
    if (value) {
      setIsFetching(true);
      debounce(() => {
        fetchPlayersList(value.trim()).then(({ data }) => {
          setPlayers(data.items);
          setIsFetching(false);
        });
      }, 400);
    }
  }, [debounce, value]);

  return (
    <div ref={inputRef} className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          type="text"
          value={value}
          className={styles.input}
          placeholder="Faceit nickname"
          onChange={handleSearchInputChange}
          onFocus={() => setOpened(true)}
        />
        <button
          disabled={value === ''}
          type="submit"
          className={styles.submitButton}
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>

        {!isFetching && !!value && isOpened && (
        <div className={styles.dropdown}>
          <ul>
            {players?.length > 0
              ? players.map((item) => (
                <li key={item.player_id}>
                  <button type="button" className={styles.listItem} onClick={() => handlePlayerPick(item.nickname)}>
                    <img src={item?.avatar || "images/avatar.jpg"} alt="avatar" className={styles.listItemAvatar} />
                    {item.nickname}
                  </button>
                </li>
              ))
              : (
                <li className={styles.listItem}>
                  Player is not found
                </li>
              )}
          </ul>
        </div>
        )}

        {isFetching && isOpened && (
        <div className={styles.dropdown}>
          <ul>
            {[0, 1, 2, 3, 4].map((skeleton) => (
              <li key={skeleton} className={cn(styles.listItem, styles.skeleton)}>
                <span className={styles.listItemAvatar} />
                <span className={styles.skeletonNick} />
              </li>
            ))}
          </ul>
        </div>
        )}
      </form>
    </div>
  );
};

export default SearchPlayerInput;
