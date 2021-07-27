import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import Popover from '../../Header/Search/Popover/Popover';
import useStyles from './SongStyles';

export interface iSong {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handlePopoverOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handlePopoverClose: () => void;
  handleClickSong: (song: {}) => void;
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
  handleClickSong,
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
        onClick={() => handleClickSong(song)}
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
