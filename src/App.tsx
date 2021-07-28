import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header/Header';
import Songs from './components/Main/Songs/Songs';
import MusicPlayerController from './components/Footer/MusicPlayerWrapper/MusicPlayerController';
import { getSpotifyToken } from './adapters/getSpotifyToken';
import { useGlobalContext } from './contexts/GlobalContext';
import './App.css';

const App: React.FC = () => {
  const { setToken } = useGlobalContext();
  useEffect(() => {
    getSpotifyToken
      .then((data) => {
        setToken(data.data.access_token);
      })
      .catch((error) => {
        if (error.response) console.log(error.response.data);
      });
  }, [setToken]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Songs />
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
      <Grid item>
        <MusicPlayerController />
      </Grid>
    </Grid>
  );
};

export default App;
