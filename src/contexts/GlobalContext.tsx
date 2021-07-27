import { createContext, useContext, useMemo, useState } from 'react';

// Create Store
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

interface GlobalContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  song: Song | null;
  setSong: React.Dispatch<React.SetStateAction<Song | null>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  token: '',
  setToken: () => '',
  songs: [],
  setSongs: () => [],
  song: null,
  setSong: () => null,
});

// Global Store Provider
interface GlobalContextProviderProps {
  children: JSX.Element;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [token, setToken] = useState('');
  const [songs, setSongs] = useState<Song[]>([]);
  const [song, setSong] = useState<Song | null>(null);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      songs,
      setSongs,
      song,
      setSong,
    }),
    [token, setToken, songs, setSongs, song, setSong],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use Global Store
export const useGlobalContext = () => useContext(GlobalContext);
