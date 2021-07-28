import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import useSongCardStyles from './SongCardStyles';

const SongCard = () => {
  const classes = useSongCardStyles();
  const { song } = useGlobalContext();

  let image = '';
  let name = '';
  let artist = '';

  if (song) {
    image = song.album.images[0].url;
    name = song.name;
    artist = song.artists[0].name;
  }

  return (
    <Card className={classes.root}>
      <CardMedia image={image} className={classes.cover}></CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.subtitle}>{artist}</Typography>
      </CardContent>
    </Card>
  );
};

export default SongCard;
