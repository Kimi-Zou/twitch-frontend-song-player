import { useEffect } from 'react';
import './App.css';
import { getSpotifyToken } from './adapters/getSpotifyToken';
import { useGlobalContext } from './contexts/GlobalContext';

const App: React.FC = () => {
  const { setToken } = useGlobalContext();

  useEffect(() => {
    getSpotifyToken
      .then((data) => setToken(data.data.access_token))
      .catch((error) => {
        if (error.response) console.log(error.response.data);
      });
  }, [setToken]);

  return <div className="App"></div>;
};

export default App;
