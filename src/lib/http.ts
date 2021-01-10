import axios from 'axios';

const client = axios.create({
  baseURL: 'https://backend.talpa-nl-wdik.playtotv.com/api/1',
  withCredentials: true,
  // timeout: 1000,
  // headers: {
  //   'SameSite': 'none'
  // }
});

export default client;