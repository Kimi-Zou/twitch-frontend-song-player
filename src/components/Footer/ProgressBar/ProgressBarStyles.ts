import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useProgressBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: theme.spacing(3) * 2,
      flexGrow: 1,
    },
    container: {
      flexWrap: 'nowrap',
    },
  }),
);

export default useProgressBarStyles;
