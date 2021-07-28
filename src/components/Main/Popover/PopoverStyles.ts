import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const popoverStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      backgroundColor: 'black',
      borderRadius: 50,
    },
    playIcon: {
      [theme.breakpoints.down('xs')]: {
        height: 50,
        width: 50,
      },
      height: 85,
      width: 85,
      color: 'white',
    },
  }),
);

export default popoverStyles;
