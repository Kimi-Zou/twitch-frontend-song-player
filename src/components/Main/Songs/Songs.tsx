import React from 'react';
import { Container, useMediaQuery, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { SongType } from '../../../types/types';
import useSongsStyles from './SongsStyles';
import OuterSongController from '../Song/OuterSongController';

// Type
interface iSongs {
  songs: SongType[];
}

// Component
const Songs: React.FC<iSongs> = React.memo(({ songs }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useSongsStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={isSmallScreen ? 2 : 4}>
        {songs.map((song) => (
          <OuterSongController key={song.id} song={song} />
        ))}
      </Grid>
    </Container>
  );
});

export default Songs;
