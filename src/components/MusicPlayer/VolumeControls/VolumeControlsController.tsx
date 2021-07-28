import { useState } from 'react';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import VolumeControls from './VolumeControls';

const VolumeControlsController: React.FC = () => {
  const { audioNode } = useGlobalContext();
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
