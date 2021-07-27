import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionArea: {
      transition: '0.1s',
      '&:hover': {
        [theme.breakpoints.down('xs')]: {
          transform: 'scale(1.05)',
          opacity: 1,
        },
        transform: 'scale(1.1)',
        opacity: 0.3,
      },
    },
    root: {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row',
      },
      display: 'flex',
      flexDirection: 'column',
    },
    cover: {
      [theme.breakpoints.down('xs')]: {
        minWidth: 100,
        height: 100,
      },
      minWidth: 200,
      height: 200,
    },
    content: {
      padding: '1rem 1.5rem 1.5rem',
    },
    title: {
      fontFamily:
        'Roobert, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '1rem',
      marginBottom: 10,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: '0.8rem',
    },
  }),
);

export default useStyles;
