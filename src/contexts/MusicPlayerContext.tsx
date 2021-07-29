import { useReducer, createContext, useContext } from 'react';
import musicPlayerReducer, { initialState } from './MusicPlayerReducer';
import { MusicPlayerState, Dispatch } from '../types/types';

const MusicPlayerContext = createContext({} as [MusicPlayerState, Dispatch]);

export const MusicPlayerContextProvider: React.FC<{ children: JSX.Element }> =
  ({ children }) => {
    const value = useReducer(musicPlayerReducer, initialState);
    return (
      <MusicPlayerContext.Provider value={value}>
        {children}
      </MusicPlayerContext.Provider>
    );
  };

export const useMusicContext = () => useContext(MusicPlayerContext);
