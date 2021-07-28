import { useState } from 'react';
import { useMusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import VolumeControls from './VolumeControls';

const VolumeControlsController: React.FC = () => {
  const { audioNode } = useMusicPlayerContext();
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    if (audioNode) {
      audioNode.volume = (newValue as number) / 100;
    }
    setValue(newValue as number);
  };

  return <VolumeControls value={value} handleChange={handleChange} />;
};

export default VolumeControlsController;
