import { useCallback, useEffect, useMemo } from 'react';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import ProgressBar from './ProgressBar';

const ProgressBarController: React.FC = () => {
  const [state, dispatch] = useMusicContext();
  const audioNode = useMemo(() => state.audioNode, [state.audioNode]);
  const duration = useMemo(() => state.duration, [state.duration]);
  const currentTime = state.currentTime;
  const barValue = state.progressBarValue;

  useEffect(() => {
    let newBarValue = 0;
    if (duration) newBarValue = Math.round((currentTime / duration) * 100);
    dispatch({ type: 'setProgressBarValue', payload: newBarValue });
  }, [currentTime, duration, dispatch]);

  const formatTime = (time: number) => {
    let newTime = '';
    if (time === 0) {
      newTime = '0:00';
    } else if (time < 9) {
      newTime = '0:0' + Math.round(time);
    } else {
      newTime = '0:' + Math.round(time);
    }
    return newTime;
  };

  const formatDuration = (duration: number | undefined) => {
    const newDuration =
      duration === 0 ? '0:00' : '0:' + Math.round(duration || 0);
    return newDuration;
  };

  const handleChange = useCallback(
    (event: any, newValue: number | number[]) => {
      if (audioNode) {
        const time = Math.round(
          ((newValue as number) / 100) * (duration as number),
        );
        audioNode.currentTime = time;
        dispatch({ type: 'setCurrentTime', payload: time });
      }
    },
    [audioNode, duration, dispatch],
  );

  return (
    <ProgressBar
      handleChange={handleChange}
      formatTime={formatTime}
      currentTime={currentTime}
      formatDuration={formatDuration}
      duration={duration}
      barValue={barValue}
    />
  );
};

export default ProgressBarController;
