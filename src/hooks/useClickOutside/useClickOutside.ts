import { useRef, useEffect, RefObject } from 'react';

const useClickOutside = (callback: VoidFunction): RefObject<HTMLDivElement>  => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent) => {
    const { target } = e;

    if (ref.current && target instanceof HTMLElement && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return ref;
};

export default useClickOutside;
