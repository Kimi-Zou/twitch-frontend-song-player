import React, { useState } from 'react';
import {
  useGlobalContext,
  Song as SongType,
} from '../../../contexts/GlobalContext';
import Song from './Song';

export interface iSongController {
  song: SongType;
}

const SongController: React.FC<iSongController> = ({ song }) => {
  const { setSong } = useGlobalContext();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClickSong = (song: SongType) => {
    setSong(song);
  };

  return (
    <Song
      song={song}
      open={open}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      handlePopoverOpen={handlePopoverOpen}
      handlePopoverClose={handlePopoverClose}
      handleClickSong={handleClickSong}
    />
  );
};

export default SongController;
