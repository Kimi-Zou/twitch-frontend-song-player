import { useEffect } from 'react';
import { useRef } from 'react';
import { useGlobalContext } from '../../contexts/GlobalContext';
import MusicPlayer from './MusicPlayer';

const MusicPlayerController = () => {
  const { setAudioNode } = useGlobalContext();
  const audioRef = useRef(null);

  useEffect(() => {
    console.log(audioRef.current);
    if (audioRef.current) setAudioNode(audioRef.current);
  }, [audioRef, setAudioNode]);

  return <MusicPlayer audioRef={audioRef} />;
};

export default MusicPlayerController;
