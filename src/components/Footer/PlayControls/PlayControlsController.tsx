import { useCallback } from 'react';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import PlayControls from './PlayControls';

const PlayControlsController: React.FC = () => {
  const [state] = useMusicContext();
  const paused = state.audioNode?.paused;

  const togglePlay = useCallback(() => {
    if (state.audioNode?.paused) {
      state.audioNode?.play();
    } else {
      state.audioNode?.pause();
    }
  }, [state.audioNode]);

  return <PlayControls togglePlay={togglePlay} paused={paused} />;
};

export default PlayControlsController;
