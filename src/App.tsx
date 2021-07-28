import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header/Header';
import Songs from './components/Main/Songs/Songs';
import MusicPlayerController from './components/Footer/MusicPlayerWrapper/MusicPlayerController';
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
