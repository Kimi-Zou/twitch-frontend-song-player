import React, { useState } from 'react';
import {
  useGlobalContext,
  Song as SongType,
} from '../../../contexts/GlobalContext';
import { useMusicContext } from '../../../contexts/MusicPlayerContext';
import Song from './Song';

export interface iSongController {
  song: SongType;
}

const SongController: React.FC<iSongController> = ({ song }) => {
  const { setSong } = useGlobalContext();
  const [state, dispatch] = useMusicContext();

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
    if (state.audioNode) {
      state.audioNode.src = song.preview_url;
      state.audioNode.volume = (state.volume as number) / 100;
      state.audioNode.onloadedmetadata = () => {
        if (state.audioNode) {
          dispatch({ type: 'setDuration', payload: state.audioNode.duration });
          dispatch({ type: 'setProgressBarValue', payload: 0 });
        }
      };
    }
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
