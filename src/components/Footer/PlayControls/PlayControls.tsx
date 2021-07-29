import React from 'react';
import { PlayCircleFilledOutlined } from '@material-ui/icons';
import PauseCircleFilledRoundedIcon from '@material-ui/icons/PauseCircleFilledRounded';
import usePlayControlsStyles from './PlayControlsStyles';

interface iPlayControls {
  togglePlay: () => void;
  paused: boolean | undefined;
}

const PlayControls: React.FC<iPlayControls> = React.memo(
  ({ togglePlay, paused }) => {
    const classes = usePlayControlsStyles();
    return (
      <div>
        {paused ? (
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
  },
);

export default PlayControls;
