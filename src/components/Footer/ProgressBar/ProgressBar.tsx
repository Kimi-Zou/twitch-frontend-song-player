import { Grid, Slider, Typography } from '@material-ui/core';
import useProgressBarStyles from './ProgressBarStyles';

interface iProgressBar {
  handleChange: (event: any, newValue: number | number[]) => void;
  formatTime: (time: number) => string;
  currentTime: number;
  formatDuration: (duration: number | undefined) => string;
  duration: number | undefined;
  barValue: number;
}

const ProgressBar: React.FC<iProgressBar> = ({
  handleChange,
  formatTime,
  currentTime,
  formatDuration,
  duration,
  barValue,
}) => {
  const classes = useProgressBarStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={1}>
          <Typography color="primary">{formatTime(currentTime)}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Slider
            aria-label="custom thumb label"
            value={barValue}
            onChange={handleChange}
            disabled={duration ? false : true}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography color="primary">{formatDuration(duration)}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProgressBar;
