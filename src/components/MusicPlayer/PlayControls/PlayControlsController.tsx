import { useState } from 'react';
import { useMusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import PlayControls from './PlayControls';

const PlayControlsController: React.FC = () => {
  const { audioNode } = useMusicPlayerContext();

  const togglePlay = () => {
    if (audioNode?.paused) {
      audioNode?.play();
    } else {
      audioNode?.pause();
    }
  };

  return <PlayControls togglePlay={togglePlay} />;
};

export default PlayControlsController;
