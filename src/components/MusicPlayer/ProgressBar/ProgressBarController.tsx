import { useGlobalContext } from '../../../contexts/GlobalContext';
import ProgressBar from './ProgressBar';

const ProgressBarController: React.FC = () => {
  const { audioNode } = useGlobalContext();

  const handleChange = (event: any, newValue: number | number[]) => {
    // if (audioNode) {
    //   const time = Math.round(
    //     ((newValue as number) * audioNode.duration) / 100,
    //   );
    //   audioNode.currentTime = time;
    // }
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
      duration={duration}
      currentTime={currentTime}
      // value={value}
      handleChange={handleChange}
    />
  );
};

export default ProgressBarController;
