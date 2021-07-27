import { createContext, useContext, useMemo, useState } from 'react';

// Create Store
interface GlobalContextProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  songs: [];
  setSongs: React.Dispatch<React.SetStateAction<[]>>;
  song: {};
  setSong: React.Dispatch<React.SetStateAction<{}>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  token: '',
  setToken: () => '',
  songs: [],
  setSongs: () => [],
  song: {},
  setSong: () => {},
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
  const [song, setSong] = useState({});

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
