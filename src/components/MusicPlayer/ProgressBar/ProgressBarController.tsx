import { useState } from 'react';
import ProgressBar from './ProgressBar';
import { AudioNode } from '../MusicPlayer';

interface iProgressBarController {
  audioNode: AudioNode;
}

const ProgressBarController: React.FC<iProgressBarController> = ({
  audioNode,
}) => {
  // const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number | number[]) => {
    if (audioNode) {
      const time = Math.round(
        ((newValue as number) * audioNode.duration) / 100,
      );
      // audioNode.currentTime = time;
    }
  };

  const duration = audioNode?.duration
    ? '0:' + Math.round(audioNode?.duration || 0)
    : '0:00';

  const currentTime =
    audioNode?.currentTime !== 0
      ? '0:' + Math.round(audioNode?.currentTime || 0)
      : '0:00';

  return (
    <ProgressBar
      audioNode={audioNode}
      duration={duration}
      currentTime={currentTime}
      // value={value}
      handleChange={handleChange}
    />
  );
};

export default ProgressBarController;
