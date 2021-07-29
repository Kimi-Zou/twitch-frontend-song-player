import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header/Header';
import SongsController from './components/Main/Songs/SongsController';
import OuterMusicPlayerController from './components/Footer/MusicPlayerWrapper/OuterMusicPlayerController';
import './App.css';

const App: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <SongsController />
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
      <Grid item>
        <OuterMusicPlayerController />
      </Grid>
    </Grid>
  );
};

export default App;
