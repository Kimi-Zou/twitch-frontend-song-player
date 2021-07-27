import { useState } from 'react';
import VolumeControls from './VolumeControls';

interface iVolumeControlsController {
  audioNode: HTMLAudioElement | null;
}

const VolumeControlsController: React.FC<iVolumeControlsController> = ({
  audioNode,
}) => {
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
