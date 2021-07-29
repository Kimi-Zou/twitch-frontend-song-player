// Type
export type State = {
  audioNode: HTMLAudioElement | null;
  duration: number | undefined;
  currentTime: number;
  volume: number | number[];
  progressBarValue: number;
};

export type Action =
  | { type: 'setAudioNode'; payload: HTMLAudioElement | null }
  | { type: 'setDuration'; payload: number }
  | { type: 'setCurrentTime'; payload: number }
  | { type: 'setVolume'; payload: number | number[] }
  | { type: 'setProgressBarValue'; payload: number };

// Initial state
export const initialState = {
  audioNode: null,
  duration: 0,
  currentTime: 0,
  volume: 100,
  progressBarValue: 0,
};

// Reducer
const musicPlayerReducer = (state: State, action: Action) => {
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
