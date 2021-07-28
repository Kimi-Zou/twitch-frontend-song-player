import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import VolumeControlsController from './VolumeControls/VolumeControlsController';
import ProgressBarController from './ProgressBar/ProgressBarController';
import { useGlobalContext } from '../../contexts/GlobalContext';
import useMusicPlayerStyles from './MusicPlayerStyles';

export type AudioNode = HTMLAudioElement | null;

interface iMusicPlayer {
  audioRef: React.MutableRefObject<null>;
  audioNode: AudioNode;
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
          <Grid item md={1}>
            Play Controls
          </Grid>
          <Grid
            item
            sm={6}
            md={7}
            lg={8}
            container
            alignItems="center"
            justify="center"
          >
            <ProgressBarController audioNode={audioNode} />
          </Grid>
          <Grid
            item
            md={1}
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <VolumeControlsController audioNode={audioNode} />
          </Grid>
        </Grid>
        <audio ref={audioRef} src={audioUrl} />
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
