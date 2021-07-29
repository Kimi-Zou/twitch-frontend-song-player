import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
      getSpotifyToken
        .then((data) => {
          setToken(data.data.access_token);
        })
        .catch((error) => {
          if (error.response) console.log(error.response.data);
        });
    }, []);

    const onSubmit = (
      event: React.FormEvent<HTMLDivElement>,
      query: string,
    ) => {
      event.preventDefault();
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
    };

    return <Search onSubmit={onSubmit} />;
  },
);

export default InnerSearchController;
