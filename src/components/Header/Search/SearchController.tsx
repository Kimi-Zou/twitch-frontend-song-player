import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import { useGlobalContext } from '../../../contexts/GlobalContext';
import { getSpotifyToken } from '../../../adapters/getSpotifyToken';

type SearchSong = (
  event: React.FormEvent<HTMLDivElement>,
  query: string,
) => void;

const SearchController: React.FC = () => {
  console.log('search controller');
  const { setSongs } = useGlobalContext();
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

  const onSubmit: SearchSong = (event, query) => {
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
};

export default SearchController;
