import React, { useState } from 'react';
import Song from './Song';

interface iSongController {
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

const SongController: React.FC<iSongController> = ({ song }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Song
      song={song}
      open={open}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      handlePopoverOpen={handlePopoverOpen}
      handlePopoverClose={handlePopoverClose}
    />
  );
};

export default SongController;
