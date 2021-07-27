import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Popover from '../../Header/Search/Popover/Popover';
import useStyles from './SongStyles';

export interface iSong {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handlePopoverOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handlePopoverClose: () => void;
  open: boolean;
  song: {
    album: {
      images: [
        {
          url: string;
        },
      ];
    };
    name: string;
    artists: [
      {
        name: string;
      },
    ];
  };
}

const Song: React.FC<iSong> = ({
  song,
  open,
  anchorEl,
  handlePopoverClose,
  handlePopoverOpen,
}) => {
  const classes = useStyles();
  const img = song.album.images[0].url;
  const name = song.name;
  const artist = song.artists[0].name;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea
        className={classes.actionArea}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Card className={classes.root}>
          <CardMedia image={img} className={classes.cover}></CardMedia>
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{name}</Typography>
            <Typography className={classes.subtitle}>{artist}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      <Popover
        open={open}
        anchorEl={anchorEl}
        handlePopoverClose={handlePopoverClose}
      />
    </Grid>
  );
};

export default Song;
