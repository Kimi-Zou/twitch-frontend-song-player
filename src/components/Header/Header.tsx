import { Grid, AppBar } from '@material-ui/core';
import Search from '../Search/Search';
import useStyles from './HeaderStyles';

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBarStyles}>
      <Grid container>
        <Grid item sm={3} md={4} />
        <Grid item xs={12} sm={6} md={4}>
          <Search />
        </Grid>
        <Grid item sm={3} md={4} />
      </Grid>
    </AppBar>
  );
};

export default Header;
