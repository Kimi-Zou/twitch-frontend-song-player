import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useGlobalContext } from '../../contexts/GlobalContext';
import SongController from '../Song/SongController';

const Songs = () => {
  const { songs } = useGlobalContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(songs);
  return (
    <Grid container spacing={isSmallScreen ? 2 : 4}>
      {songs.map((song) => (
        <SongController song={song} />
      ))}
    </Grid>
  );
};

export default Songs;
