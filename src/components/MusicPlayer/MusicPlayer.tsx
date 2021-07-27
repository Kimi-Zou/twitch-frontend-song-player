import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import useMusicPlayerStyles from './MusicPlayerStyles';

const MusicPlayer = () => {
  const classes = useMusicPlayerStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Grid container>
        <Grid item md={3}>
          <SongCard />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
