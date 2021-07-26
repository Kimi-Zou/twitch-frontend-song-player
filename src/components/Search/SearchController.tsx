import React from 'react';
import axios from 'axios';
import Search from './Search';
import { useGlobalContext } from '../../contexts/GlobalContext';

type SearchSong = (
  event: React.FormEvent<HTMLDivElement>,
  query: string,
) => void;

const SearchController: React.FC = () => {
  const { token } = useGlobalContext();

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
    }).then((data) => {
      console.log(data.data.tracks.items);
    });
  };

  return <Search onSubmit={onSubmit} />;
};

export default SearchController;
