import { useRef } from 'react';
import MusicPlayer from './MusicPlayer';

const MusicPlayerController = () => {
  const audioRef = useRef(null);
  const audioNode: HTMLAudioElement | null = audioRef.current;

  // test
  // console.log(audioNode);

  return <MusicPlayer audioRef={audioRef} audioNode={audioNode} />;
};

export default MusicPlayerController;
