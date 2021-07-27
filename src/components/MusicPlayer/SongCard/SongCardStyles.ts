import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useSongCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      // width: 400,
      height: 80,
    },
    cover: {
      minWidth: 80,
      height: 80,
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

export default useSongCardStyles;
