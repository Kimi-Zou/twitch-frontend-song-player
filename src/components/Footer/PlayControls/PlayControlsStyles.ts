import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const usePlayControlsStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      width: 30,
      height: 30,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }),
);

export default usePlayControlsStyles;
