import { useEffect } from 'react';
import './App.css';
import { getSpotifyToken } from './adapters/getSpotifyToken';
import { useStore } from './contexts/Store';

const App = () => {
  const { setToken } = useStore();

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
