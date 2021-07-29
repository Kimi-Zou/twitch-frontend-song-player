import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useMusicPlayerStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      backgroundColor: 'white',
    },
    container: {
      flexWrap: 'nowrap',
    },
  }),
);

export default useMusicPlayerStyles;
