import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import InnerMusicPlayerController from './InnerMusicPlayerController';

const OuterMusicPlayerController = () => {
  const [state, dispatch] = useMusicContext();
  const audioNode = state.audioNode;
  return (
    <InnerMusicPlayerController dispatch={dispatch} audioNode={audioNode} />
  );
};

export default OuterMusicPlayerController;
