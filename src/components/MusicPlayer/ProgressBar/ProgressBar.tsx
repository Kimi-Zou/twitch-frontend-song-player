import { Grid, Slider, Typography } from '@material-ui/core';
import { useMusicPlayerContext } from '../../../contexts/MusicPlayerContext';
import useProgressBarStyles from './ProgressBarStyles';

interface iProgressBar {
  handleChange: (event: any, newValue: number | number[]) => void;
}

const ProgressBar: React.FC<iProgressBar> = ({ handleChange }) => {
  const classes = useProgressBarStyles();
  const { audioNode, currentTime, duration, progressBarValue } =
    useMusicPlayerContext();

  return (
    <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={1}>
          <Typography color="primary">{currentTime}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Slider
            aria-label="custom thumb label"
            value={progressBarValue}
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
