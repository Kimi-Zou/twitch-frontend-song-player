import Grid from '@material-ui/core/Grid';
import { Container, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import SongController from '../Song/SongController';
import useSongsStyles from './SongsStyles';

const Songs = () => {
  console.log('main: songs');
  const { songs } = useGlobalContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useSongsStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={isSmallScreen ? 2 : 4}>
        {songs.map((song) => (
          <SongController key={song.id} song={song} />
        ))}
      </Grid>
    </Container>
  );
};

export default Songs;
