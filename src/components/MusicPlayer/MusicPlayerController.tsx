import { useEffect, useRef } from 'react';
import { useMusicPlayerContext } from '../../contexts/MusicPlayerContext';
import MusicPlayer from './MusicPlayer';

const MusicPlayerController = () => {
  const { setAudioNode } = useMusicPlayerContext();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) setAudioNode(audioRef.current);
  }, [audioRef, setAudioNode]);

  return <MusicPlayer audioRef={audioRef} />;
};

export default MusicPlayerController;
