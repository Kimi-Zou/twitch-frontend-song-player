import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Song } from '../../../contexts/GlobalContext';
import OuterSongController from '../Song/OuterSongController';
import useSongsStyles from './SongsStyles';

// Type
interface iSongs {
  songs: Song[];
}

// Component
const Songs: React.FC<iSongs> = React.memo(({ songs }) => {
  console.log('main: songs');
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
