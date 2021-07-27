import { Grid, Slider } from '@material-ui/core';
import { VolumeDown, VolumeUp, VolumeMute } from '@material-ui/icons';
import useVolumeControlsStyles from './VolumeControlsStyles';

interface iVolumeControls {
  value: number;
  handleChange: (event: any, newValue: number | number[]) => void;
}

const VolumeControls: React.FC<iVolumeControls> = ({ value, handleChange }) => {
  const classes = useVolumeControlsStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          {value === 0 ? (
            <VolumeMute color="primary" />
          ) : (
            <VolumeDown color="primary" />
          )}
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp color="primary" />
        </Grid>
      </Grid>
      {/* <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" /> */}
    </div>
  );
};

export default VolumeControls;
