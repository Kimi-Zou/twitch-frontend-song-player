import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import VolumeControlsController from './VolumeControls/VolumeControlsController';
import { useGlobalContext } from '../../contexts/GlobalContext';
import useMusicPlayerStyles from './MusicPlayerStyles';

interface iMusicPlayer {
  audioRef: React.MutableRefObject<null>;
  audioNode: HTMLAudioElement | null;
}

const MusicPlayer: React.FC<iMusicPlayer> = ({ audioRef, audioNode }) => {
  const classes = useMusicPlayerStyles();
  const { song } = useGlobalContext();
  const audioUrl = song && song.preview_url ? song.preview_url : '';

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Grid container>
        <Grid item md={3}>
          <SongCard />
        </Grid>
        <Grid item container md={9}>
          <Grid item md={2}>
            Play Controls
          </Grid>
          <Grid item sm={5} md={6} lg={7}>
            Progress Bar
          </Grid>
          <Grid item md={1}>
            <VolumeControlsController audioNode={audioNode} />
          </Grid>
        </Grid>
        <audio ref={audioRef} src={audioUrl} />
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
