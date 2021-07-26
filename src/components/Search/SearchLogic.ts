import React from 'react';
import axios from 'axios';

type OnSubmit = (
  event: React.FormEvent<HTMLDivElement>,
  token: string,
  query: string,
) => void;

const onSubmit: OnSubmit = (event, token, query) => {
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

export default onSubmit;
