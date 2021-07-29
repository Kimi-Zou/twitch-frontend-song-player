import InnerSongController from './InnerSongController';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import { SongType } from '../../../types/types';

// Type
interface iOuterSongController {
  song: SongType;
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
