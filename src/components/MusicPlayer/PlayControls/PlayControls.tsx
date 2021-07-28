import { PlayCircleFilledOutlined } from '@material-ui/icons';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import usePlayControlsStyles from './PlayControlsStyles';

interface iPlayControls {
  togglePlay: () => void;
  audioNode: HTMLAudioElement | null;
}

const PlayControls: React.FC<iPlayControls> = ({ togglePlay, audioNode }) => {
  const classes = usePlayControlsStyles();
  return (
    <div>
      {audioNode?.paused ? (
        <PlayCircleFilledOutlined
          className={classes.icon}
          color="primary"
          onClick={togglePlay}
        />
      ) : (
        <PauseCircleFilledRoundedIcon
          className={classes.icon}
          color="primary"
          onClick={togglePlay}
        />
      )}
    </div>
  );
};

export default PlayControls;
