import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'src/store/rootReducer';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
