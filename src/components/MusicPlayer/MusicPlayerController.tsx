import { useRef } from 'react';
import MusicPlayer from './MusicPlayer';

const MusicPlayerController = () => {
  const audioRef = useRef(null);
  const audioNode = audioRef.current;
  // test
  console.log(audioRef.current);

  return <MusicPlayer audioRef={audioRef} audioNode={audioNode} />;
};

export default MusicPlayerController;
