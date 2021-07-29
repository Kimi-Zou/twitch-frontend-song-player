import { MusicPlayerState, MusicPlayerAction } from '../types/types';

// Initial state
export const initialState = {
  audioNode: null,
  duration: 0,
  currentTime: 0,
  volume: 100,
  progressBarValue: 0,
};

// Reducer
const musicPlayerReducer = (
  state: MusicPlayerState,
  action: MusicPlayerAction,
) => {
  switch (action.type) {
    case 'setAudioNode':
      return { ...state, audioNode: action.payload };
    case 'setDuration':
      return { ...state, duration: action.payload };
    case 'setCurrentTime':
      return { ...state, currentTime: action.payload };
    case 'setVolume':
      return { ...state, volume: action.payload };
    case 'setProgressBarValue':
      return { ...state, progressBarValue: action.payload };
    default:
      return state;
  }
};

export default musicPlayerReducer;
