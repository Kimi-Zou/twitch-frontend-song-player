import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import OuterSearchController from '../Search/OuterSearchController';
import useStyles from './HeaderStyles';

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
