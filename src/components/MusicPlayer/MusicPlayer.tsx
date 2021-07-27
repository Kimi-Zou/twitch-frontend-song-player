import { AppBar, Grid } from '@material-ui/core';
import SongCard from './SongCard/SongCard';
import useMusicPlayerStyles from './MusicPlayerStyles';
import { useGlobalContext } from '../../contexts/GlobalContext';

interface iMusicPlayer {
  audioRef: React.MutableRefObject<null>;
  audioNode: HTMLAudioElement | null;
}

const MusicPlayer: React.FC<iMusicPlayer> = ({ audioRef }) => {
  const classes = useMusicPlayerStyles();
  const { song } = useGlobalContext();
  const audioUrl = song && song.preview_url ? song.preview_url : '';

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Grid container>
        <Grid item md={3}>
          <SongCard />
        </Grid>
        <audio ref={audioRef} src={audioUrl} />
      </Grid>
    </AppBar>
  );
};

export default MusicPlayer;
