import React, {createContext, useReducer, ReactNode} from 'react'

import {initialState, reducer} from './store.reducer';
import {setBaseTimeAction} from './store.actions';

type StoreContextType =
  typeof initialState &
  Record<'setBaseTime', (arg: Parameters<typeof setBaseTimeAction>[0]) => void>;
export const StoreContext = createContext<StoreContextType>({
  ...initialState, setBaseTime: () => ({}) as any
});

type StoreProviderProps = {
  children: ReactNode
};

function StoreProvider({children}: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerValue = {
    baseTime: state.baseTime,
    setBaseTime: (baseTime: number) => dispatch(setBaseTimeAction(baseTime)),
  };

  return (
    <StoreContext.Provider value={providerValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;