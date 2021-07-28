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
  audioNode: HTMLAudioElement | null;
  setAudioNode: React.Dispatch<React.SetStateAction<null>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  song: Song | null;
  setSong: React.Dispatch<React.SetStateAction<Song | null>>;
}

const GlobalContext = createContext<GlobalContextProps>({
  audioNode: null,
  setAudioNode: () => HTMLAudioElement,
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
  const [audioNode, setAudioNode] = useState(null);
  const [token, setToken] = useState('');
  const [songs, setSongs] = useState<Song[]>([]);
  const [song, setSong] = useState<Song | null>(null);

  console.log(audioNode);

  const contextValue = useMemo(
    () => ({
      audioNode,
      setAudioNode,
      token,
      setToken,
      songs,
      setSongs,
      song,
      setSong,
    }),
    [token, setToken, songs, setSongs, song, setSong, audioNode, setAudioNode],
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use Global Store
export const useGlobalContext = () => useContext(GlobalContext);
