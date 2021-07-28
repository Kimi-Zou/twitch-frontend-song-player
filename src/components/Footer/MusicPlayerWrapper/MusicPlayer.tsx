import React from 'react';
import { AppBar, Grid } from '@material-ui/core';
import SongCard from '../SongCard/SongCard';
import VolumeControlsController from '../VolumeControls/VolumeControlsController';
import ProgressBarController from '../ProgressBar/ProgressBarController';
import useMusicPlayerStyles from './MusicPlayerStyles';
import PlayControlsController from '../PlayControls/PlayControlsController';
import { Action } from '../../../contexts/MusicPlayerReducer';

// Type
interface iMusicPlayer {
  audioRef: React.MutableRefObject<null>;
  dispatch: React.Dispatch<Action>;
  audioNode: HTMLAudioElement | null;
}

// Component
const MusicPlayer: React.FC<iMusicPlayer> = React.memo(
  ({ audioRef, dispatch, audioNode }) => {
    console.log('footer: player');
    const classes = useMusicPlayerStyles();

    return (
      <AppBar className={classes.appBar} position="fixed">
        <Grid container>
          <Grid item md={3}>
            <SongCard />
          </Grid>
          <Grid item container md={9}>
            <Grid
              item
              md={1}
              container
              alignItems="center"
              justifyContent="center"
            >
              <PlayControlsController />
            </Grid>
            <Grid
              item
              sm={6}
              md={7}
              lg={8}
              container
              alignItems="center"
              justifyContent="center"
            >
              <ProgressBarController />
            </Grid>
            <Grid
              item
              md={1}
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <VolumeControlsController />
            </Grid>
          </Grid>
          <audio
            ref={audioRef}
            preload="metadata"
            autoPlay
            onTimeUpdate={() => {
              if (audioNode)
                dispatch({
                  type: 'setCurrentTime',
                  payload: audioNode.currentTime,
                });
            }}
          />
        </Grid>
      </AppBar>
    );
  },
);

export default MusicPlayer;
