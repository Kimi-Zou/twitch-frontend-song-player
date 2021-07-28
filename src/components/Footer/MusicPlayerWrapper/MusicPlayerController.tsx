import { useEffect, useRef } from 'react';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import MusicPlayer from './MusicPlayer';

const MusicPlayerController = () => {
  const audioRef = useRef(null);
  const [state, dispatch] = useMusicContext();

  useEffect(() => {
    if (audioRef.current)
      dispatch({ type: 'setAudioNode', payload: audioRef.current });
  }, [audioRef, dispatch]);

  return (
    <MusicPlayer
      audioRef={audioRef}
      dispatch={dispatch}
      audioNode={state.audioNode}
    />
  );
};

export default MusicPlayerController;
