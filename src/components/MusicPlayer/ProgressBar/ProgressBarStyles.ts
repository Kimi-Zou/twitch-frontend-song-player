import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useProgressBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500 + theme.spacing(3) * 2,
    },
  }),
);

export default useProgressBarStyles;
