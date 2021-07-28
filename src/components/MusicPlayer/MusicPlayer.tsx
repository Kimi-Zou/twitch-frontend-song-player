import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import VolumeControlsController from './VolumeControls/VolumeControlsController';
import ProgressBarController from './ProgressBar/ProgressBarController';
import useMusicPlayerStyles from './MusicPlayerStyles';
import { useMusicPlayerContext } from '../../contexts/MusicPlayerContext';
import PlayControlsController from './PlayControls/PlayControlsController';

interface iMusicPlayer {
  audioRef: React.MutableRefObject<null>;
}

const MusicPlayer: React.FC<iMusicPlayer> = ({ audioRef }) => {
  const classes = useMusicPlayerStyles();
  const { audioNode, handleTimeUpdate, handleBarValueUpdate } =
    useMusicPlayerContext();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Grid container>
        <Grid item md={3}>
          <SongCard />
        </Grid>
        <Grid item container md={9}>
          <Grid item md={1} container alignItems="center" justify="center">
            <PlayControlsController />
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
            <ProgressBarController />
          </Grid>
          <Grid
            item
            md={1}
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <VolumeControlsController />
          </Grid>
        </Grid>
        <audio
          ref={audioRef}
          preload="metadata"
          onTimeUpdate={() => {
            if (audioNode) {
              handleTimeUpdate(audioNode.currentTime);
              handleBarValueUpdate(audioNode.currentTime, audioNode.duration);
            }
          }}
          autoPlay
        />
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
