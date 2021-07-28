import { createContext, useContext, useMemo, useState } from 'react';

// Create Context
export type Song = {
  album: {
    images: [
      {
        url: string;
      },
    ];
  };
  artists: [
    {
      name: string;
    },
  ];
  name: string;
  id: string;
  preview_url: string;
};

interface iGlobalContext {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  song: Song | null;
  setSong: React.Dispatch<React.SetStateAction<Song | null>>;
}

const GlobalContext = createContext<iGlobalContext>({
  songs: [],
  setSongs: () => [],
  song: null,
  setSong: () => null,
});

// Context Provider
interface iGlobalContextProvider {
  children: JSX.Element;
}

export const GlobalContextProvider = ({ children }: iGlobalContextProvider) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [song, setSong] = useState<Song | null>(null);

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
