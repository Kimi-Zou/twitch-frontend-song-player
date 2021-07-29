import React from 'react';
import { Grid, Slider } from '@material-ui/core';
import { VolumeDown, VolumeUp, VolumeMute } from '@material-ui/icons';
import useVolumeControlsStyles from './VolumeControlsStyles';

interface iVolumeControls {
  value: number | number[];
  handleChange: (event: any, newValue: number | number[]) => void;
  src: string | undefined;
}

const VolumeControls: React.FC<iVolumeControls> = React.memo(
  ({ value, handleChange, src }) => {
    console.log('volume');
    const classes = useVolumeControlsStyles();

    return (
      <div className={classes.root}>
        {src ? (
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
        ) : (
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
                disabled
                defaultValue={100}
                aria-labelledby="disabled-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp color="primary" />
            </Grid>
          </Grid>
        )}
      </div>
    );
  },
);

export default VolumeControls;
