import InnerSongController from './InnerSongController';
import { useGlobalContext, Song } from '../../../contexts/GlobalContext';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';

// Type
interface iOuterSongController {
  song: Song;
}

// Component
const OuterSongController: React.FC<iOuterSongController> = ({ song }) => {
  const { setSong } = useGlobalContext();
  const [state, dispatch] = useMusicContext();
  const audioNode = state.audioNode;

  return (
    <InnerSongController
      song={song}
      setSong={setSong}
      audioNode={audioNode}
      dispatch={dispatch}
    />
  );
};

export default OuterSongController;
