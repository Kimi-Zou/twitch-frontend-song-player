import React, { useState } from 'react';
import { Song as SongType } from '../../../contexts/GlobalContext';
import { Action } from '../../../contexts/MusicPlayerReducer';
import Song from './Song';

export interface iSongController {
  song: SongType;
  setSong: React.Dispatch<React.SetStateAction<SongType | null>>;
  audioNode: HTMLAudioElement | null;
  dispatch: React.Dispatch<Action>;
}

const InnerSongController: React.FC<iSongController> = React.memo(
  ({ song, setSong, audioNode, dispatch }) => {
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
      if (audioNode) {
        audioNode.src = song.preview_url;
        // audioNode.volume = (volume as number) / 100;
        audioNode.onloadedmetadata = () => {
          if (audioNode) {
            dispatch({ type: 'setDuration', payload: audioNode.duration });
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
  },
);

export default InnerSongController;
