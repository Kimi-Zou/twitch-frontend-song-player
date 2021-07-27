import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import useMusicPlayerStyles from './MusicPlayerStyles';
import { useGlobalContext } from '../../contexts/GlobalContext';

const MusicPlayer = () => {
  const classes = useMusicPlayerStyles();
  const { song } = useGlobalContext();
  console.log(song);
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Grid container>
        <Grid item>
          <SongCard />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
