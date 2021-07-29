import React, { useState } from 'react';
import { Dispatch, SetSongType, SongType } from '../../../types/types';
import Song from './Song';

export interface iSongController {
  song: SongType;
  setSong: SetSongType;
  audioNode: HTMLAudioElement | null;
  dispatch: Dispatch;
}

const InnerSongController: React.FC<iSongController> = React.memo(
  ({ song, setSong, audioNode, dispatch }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(
      undefined,
    );
    const open = Boolean(anchorEl);

    const handlePopoverOpen = (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(undefined);
    };

    const handleClickSong = (song: SongType) => {
      setSong(song);
      if (audioNode) {
        audioNode.src = song.preview_url;
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
