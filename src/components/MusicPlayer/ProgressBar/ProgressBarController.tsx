import { useMusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import ProgressBar from './ProgressBar';

const ProgressBarController: React.FC = () => {
  const { audioNode } = useMusicPlayerContext();

  const handleChange = (event: any, newValue: number | number[]) => {
    if (audioNode) {
      const time = Math.round(
        ((newValue as number) * audioNode.duration) / 100,
      );
      audioNode.currentTime = time;
    }
  };

  return <ProgressBar handleChange={handleChange} />;
};

export default ProgressBarController;
