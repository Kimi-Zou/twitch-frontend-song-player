import { createContext, useContext, useMemo, useState } from 'react';

// Create Store
interface GlobalContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  songs: [];
  setSongs: React.Dispatch<React.SetStateAction<[]>>;
  song: {
    album: {
      images: [
        {
          url: string;
        },
      ];
    };
    name: string;
    artists: [
      {
        name: string;
      },
    ];
  } | null;
  setSong: React.Dispatch<React.SetStateAction<null>>;
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
  const [songs, setSongs] = useState<[]>([]);
  const [song, setSong] = useState(null);

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
