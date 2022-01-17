import { useCallback, useRef } from 'react';

import { isDOMUsable } from 'src/utils';

import { TDebounce } from './useDebounce.types';

const useDebounce = (): TDebounce => {
  const debounceTimer = useRef<number>();
  
  return useCallback((callback: VoidFunction, delay: number) => {
    if (isDOMUsable()) {
      window.clearTimeout( debounceTimer.current);
      debounceTimer.current = window.setTimeout(callback, delay);
    }
  }, [debounceTimer]);
};

export default useDebounce;
