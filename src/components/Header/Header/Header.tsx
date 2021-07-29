import { AppBar, Grid } from '@material-ui/core';
import useStyles from './HeaderStyles';
import OuterSearchController from '../Search/OuterSearchController';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBarStyles}>
      <Grid container>
        <Grid item sm={3} md={4} />
        <Grid item xs={12} sm={6} md={4}>
          <OuterSearchController />
        </Grid>
        <Grid item sm={3} md={4} />
      </Grid>
    </AppBar>
  );
};

export default Header;
