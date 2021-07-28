import { Grid, Slider, Typography } from '@material-ui/core';
import useProgressBarStyles from './ProgressBarStyles';
import { AudioNode } from '../MusicPlayer';

interface iProgressBar {
  audioNode: AudioNode;
  duration: string;
  currentTime: string;
  // value: number;
  handleChange: (event: any, newValue: number | number[]) => void;
}

const ProgressBar: React.FC<iProgressBar> = ({
  audioNode,
  duration,
  currentTime,
  // value,
  handleChange,
}) => {
  const classes = useProgressBarStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={1}>
          <Typography color="primary">{currentTime}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Slider
            aria-label="custom thumb label"
            defaultValue={0}
            onChange={handleChange}
            disabled={audioNode?.duration ? false : true}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography color="primary">{duration}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProgressBar;
