import { useCallback } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

// Create Context
interface iMusicPlayerContext {
  updateDuration: (value: any) => void;
  audioNode: HTMLAudioElement | null;
  setAudioNode: React.Dispatch<React.SetStateAction<HTMLAudioElement | null>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  currentTime: string;
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
  handleTimeUpdate: (time: number) => void;
  progressBarValue: number;
  setProgressBarValue: React.Dispatch<React.SetStateAction<number>>;
  handleBarValueUpdate: (time: any, duration: any) => void;
}

const MusicPlayerContext = createContext<iMusicPlayerContext>({
  updateDuration: (value: any) => undefined,
  audioNode: null,
  setAudioNode: () => HTMLAudioElement,
  duration: '',
  setDuration: () => '',
  currentTime: '',
  setCurrentTime: () => '',
  handleTimeUpdate: () => undefined,
  progressBarValue: 0,
  setProgressBarValue: () => undefined,
  handleBarValueUpdate: () => undefined,
});

// Context Provider
interface iMusicPlayerContextProvider {
  children: JSX.Element;
}

export const MusicPlayerContextProvider = ({
  children,
}: iMusicPlayerContextProvider) => {
  const [audioNode, setAudioNode] = useState<HTMLAudioElement | null>(null);
  const [duration, setDuration] = useState('0:00');
  const [currentTime, setCurrentTime] = useState('0:00');
  const [progressBarValue, setProgressBarValue] = useState(0);

  const updateDuration = useCallback(
    (value) => {
      if (audioNode) {
        audioNode.onloadedmetadata = () => {
          const newValue =
            value === 0 ? '0:00' : '0:' + Math.round(audioNode.duration || 0);
          setDuration(newValue);
        };
      }
    },
    [audioNode],
  );

  const handleTimeUpdate = useCallback((time) => {
    let newTime = '';
    if (time === 0) {
      newTime = '0:00';
    } else if (time < 9) {
      newTime = '0:0' + Math.round(time);
    } else {
      newTime = '0:' + Math.round(time);
    }
    setCurrentTime(newTime);
  }, []);

  const handleBarValueUpdate = useCallback((time, duration) => {
    setProgressBarValue(Math.round((time / duration) * 100));
  }, []);

  const contextValue = useMemo(
    () => ({
      audioNode,
      setAudioNode,
      duration,
      setDuration,
      currentTime,
      setCurrentTime,
      updateDuration,
      handleTimeUpdate,
      progressBarValue,
      setProgressBarValue,
      handleBarValueUpdate,
    }),
    [
      audioNode,
      setAudioNode,
      duration,
      setDuration,
      currentTime,
      setCurrentTime,
      updateDuration,
      handleTimeUpdate,
      progressBarValue,
      setProgressBarValue,
      handleBarValueUpdate,
    ],
  );

  return (
    <MusicPlayerContext.Provider value={contextValue}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// Custom Hook to use Music Context
export const useMusicPlayerContext = () => useContext(MusicPlayerContext);
