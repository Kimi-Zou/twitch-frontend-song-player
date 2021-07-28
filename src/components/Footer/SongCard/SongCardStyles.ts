import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useSongCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      fontSize: '0.9rem',
      marginBottom: 4,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: '0.7rem',
    },
  }),
);

export default useSongCardStyles;
