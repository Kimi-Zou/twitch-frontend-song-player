import React from 'react';
import { AppBar, Grid } from '@material-ui/core';
import SongCard from '../SongCard/SongCard';
import VolumeControlsController from '../VolumeControls/VolumeControlsController';
import ProgressBarController from '../ProgressBar/ProgressBarController';
import useMusicPlayerStyles from './MusicPlayerStyles';
import PlayControlsController from '../PlayControls/PlayControlsController';
import { Dispatch } from '../../../types/types';

// Type
interface iMusicPlayer {
  audioRef:
    | React.MutableRefObject<null>
    | React.LegacyRef<HTMLAudioElement>
    | null;
  dispatch: Dispatch;
  audioNode: HTMLAudioElement | null;
}

// Component
const MusicPlayer: React.FC<iMusicPlayer> = React.memo(
  ({ audioRef, dispatch, audioNode }) => {
    console.log('footer: player');
    const classes = useMusicPlayerStyles();

    return (
      <AppBar className={classes.appBar} position="fixed">
        <Grid container className={classes.container}>
          <Grid item xs={2} md={3}>
            <SongCard />
          </Grid>
          <Grid item xs={10} md={9} spacing={4} container>
            <Grid xs={1} />
            <Grid
              item
              xs={1}
              container
              justifyContent="center"
              alignItems="center"
            >
              <PlayControlsController />
            </Grid>
            <Grid
              item
              xs={6}
              lg={7}
              container
              justifyContent="center"
              alignItems="center"
            >
              <ProgressBarController />
            </Grid>
            <Grid
              item
              xs={4}
              sm={3}
              lg={2}
              container
              justifyContent="center"
              alignItems="center"
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
