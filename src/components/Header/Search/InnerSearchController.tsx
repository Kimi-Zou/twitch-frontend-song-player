import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { getSpotifyToken } from '../../../adapters/getSpotifyToken';
import { SetSongsType } from '../../../types/types';
import Search from './Search';

interface iSearchController {
  setSongs: SetSongsType;
}

const InnerSearchController: React.FC<iSearchController> = React.memo(
  ({ setSongs }) => {
    console.log('search controller');

    const [token, setToken] = useState('');

    const fetchSongs = useCallback(
      (query: string) => {
        if (!query) return;
        axios(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          method: 'GET',
        })
          .then((data) => {
            setSongs(data.data.tracks.items);
          })
          .catch((error) => {
            if (error.response) console.log(error.response.data);
          });
      },
      [token, setSongs],
    );

    useEffect(() => {
      getSpotifyToken
        .then((data) => {
          setToken(data.data.access_token);
          return data.data.access_token;
        })
        .then((token) => {
          fetchSongs('bigbang');
        })
        .catch((error) => {
          if (error.response) console.log(error.response.data);
        });
    }, [fetchSongs]);

    const onSubmit = (
      event: React.FormEvent<HTMLDivElement>,
      query: string,
    ) => {
      event.preventDefault();
      fetchSongs(query);
    };

    return <Search onSubmit={onSubmit} />;
  },
);

export default InnerSearchController;
