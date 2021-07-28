import { Grid, Slider, Typography } from '@material-ui/core';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import useProgressBarStyles from './ProgressBarStyles';

interface iProgressBar {
  duration: string;
  currentTime: string;
  handleChange: (event: any, newValue: number | number[]) => void;
}

const ProgressBar: React.FC<iProgressBar> = ({
  duration,
  currentTime,
  handleChange,
}) => {
  const classes = useProgressBarStyles();
  const { audioNode } = useGlobalContext();

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
