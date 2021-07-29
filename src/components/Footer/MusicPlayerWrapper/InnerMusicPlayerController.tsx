import React, { useEffect, useRef } from 'react';
import { Action } from '../../../contexts/MusicPlayerReducer';
import MusicPlayer from './MusicPlayer';

// Type
interface iInnerMusicPlayerController {
  dispatch: React.Dispatch<Action>;
  audioNode: HTMLAudioElement | null;
}

// Component
const InnerMusicPlayerController: React.FC<iInnerMusicPlayerController> =
  React.memo(({ dispatch, audioNode }) => {
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current)
        dispatch({ type: 'setAudioNode', payload: audioRef.current });
    }, [audioRef, dispatch]);

    return (
      <MusicPlayer
        audioRef={audioRef}
        dispatch={dispatch}
        audioNode={audioNode}
      />
    );
  });

export default InnerMusicPlayerController;
