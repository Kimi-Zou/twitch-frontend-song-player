import { createContext, useContext, useMemo, useState } from 'react';
import { SongType, SetSongsType, SetSongType } from '../types/types';

// Create Context
interface iGlobalContext {
  songs: SongType[];
  setSongs: SetSongsType;
  song: SongType | undefined;
  setSong: SetSongType;
}

const GlobalContext = createContext<iGlobalContext>({
  songs: [],
  setSongs: () => [],
  song: undefined,
  setSong: () => undefined,
});

// Context Provider
interface iGlobalContextProvider {
  children: JSX.Element;
}

export const GlobalContextProvider = ({ children }: iGlobalContextProvider) => {
  const [songs, setSongs] = useState<SongType[]>([]);
  const [song, setSong] = useState<SongType | undefined>(undefined);

  const contextValue = useMemo(
    () => ({
      songs,
      setSongs,
      song,
      setSong,
    }),
    [songs, setSongs, song, setSong],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook to use Global Context
export const useGlobalContext = () => useContext(GlobalContext);
