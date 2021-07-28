import { PlayCircleFilledOutlined } from '@material-ui/icons';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import { useMusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import usePlayControlsStyles from './PlayControlsStyles';

interface iPlayControls {
  togglePlay: () => void;
}

const PlayControls: React.FC<iPlayControls> = ({ togglePlay }) => {
  const { audioNode } = useMusicPlayerContext();
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
