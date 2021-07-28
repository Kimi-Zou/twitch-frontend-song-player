import { useMemo } from 'react';
import { useCallback } from 'react';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import PlayControls from './PlayControls';

const PlayControlsController: React.FC = () => {
  const [state] = useMusicContext();

  const togglePlay = useCallback(() => {
    if (state.audioNode?.paused) {
      state.audioNode?.play();
    } else {
      state.audioNode?.pause();
    }
  }, [state.audioNode]);

  const audioNode = useMemo(() => state.audioNode, [state.audioNode]);

  return <PlayControls togglePlay={togglePlay} audioNode={audioNode} />;
};

export default PlayControlsController;
