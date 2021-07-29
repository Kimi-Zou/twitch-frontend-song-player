// Music Player Reducer
export type MusicPlayerState = {
  audioNode: HTMLAudioElement | null;
  duration: number | undefined;
  currentTime: number;
  volume: number | number[];
  progressBarValue: number;
};

export type MusicPlayerAction =
  | { type: 'setAudioNode'; payload: HTMLAudioElement | null }
  | { type: 'setDuration'; payload: number }
  | { type: 'setCurrentTime'; payload: number }
  | { type: 'setVolume'; payload: number | number[] }
  | { type: 'setProgressBarValue'; payload: number };

export type Dispatch = React.Dispatch<MusicPlayerAction>;

// Song
export type SongType = {
  album: {
    images: [
      {
        url: string;
      },
    ];
  };
  artists: [
    {
      name: string;
    },
  ];
  name: string;
  id: string;
  preview_url: string;
};

// Setter
export type SetSongsType = React.Dispatch<React.SetStateAction<SongType[]>>;

export type SetSongType = React.Dispatch<
  React.SetStateAction<SongType | undefined>
>;
