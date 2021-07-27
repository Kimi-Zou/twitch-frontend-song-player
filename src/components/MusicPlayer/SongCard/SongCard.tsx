import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
// import { useGlobalContext } from '../../../contexts/GlobalContext';
import useSongCardStyles from './SongCardStyles';

const SongCard = () => {
  const classes = useSongCardStyles();
  // const { song } = useGlobalContext();

  return (
    <Card className={classes.root}>
      <CardMedia
        image="https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        className={classes.cover}
      ></CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>Kill your love</Typography>
        <Typography className={classes.subtitle}>Blackpink</Typography>
      </CardContent>
    </Card>
  );
};

export default SongCard;
