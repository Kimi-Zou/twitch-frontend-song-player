import axios from 'axios';
import { stringify } from 'qs';

const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT;
const SPOTIFY_SECRET = process.env.REACT_APP_SPOTIFY_SECRET;

export const getSpotifyToken = axios('https://accounts.spotify.com/api/token', {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(SPOTIFY_CLIENT + ':' + SPOTIFY_SECRET),
  },
  data: stringify({
    grant_type: 'client_credentials',
  }),
  method: 'POST',
});
