import { useReducer } from 'react';
import { createContext, useContext } from 'react';
import musicPlayerReducer, {
  initialState,
  State,
  Action,
} from './MusicPlayerReducer';

// Type
type iMusicPlayerContext = [State, React.Dispatch<Action>];

interface iMusicPlayerContextProvider {
  children: JSX.Element;
}

// Context
const MusicPlayerContext = createContext({} as iMusicPlayerContext);

export const MusicPlayerContextProvider: React.FC<iMusicPlayerContextProvider> =
  ({ children }) => {
    const value = useReducer(musicPlayerReducer, initialState);
    return (
      <MusicPlayerContext.Provider value={value}>
        {children}
      </MusicPlayerContext.Provider>
    );
  };

export const useMusicContext = () => useContext(MusicPlayerContext);
