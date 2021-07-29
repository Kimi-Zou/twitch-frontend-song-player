import { useCallback } from 'react';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import VolumeControls from './VolumeControls';

const VolumeControlsController: React.FC = () => {
  const [state, dispatch] = useMusicContext();
  const audioNode = state.audioNode;
  const value = state.volume;
  const src = audioNode?.src;

  const handleChange = useCallback(
    (event: any, newValue: number | number[]) => {
      if (audioNode) {
        audioNode.volume = (newValue as number) / 100;
      }
      dispatch({ type: 'setVolume', payload: newValue });
    },
    [audioNode, dispatch],
  );

  return <VolumeControls value={value} handleChange={handleChange} src={src} />;
};

export default VolumeControlsController;
