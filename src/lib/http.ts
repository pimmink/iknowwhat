import axios from 'axios';


const client = axios.create({
  // baseURL: 'https://backend.talpa-nl-wdik.playtotv.com/api/1',
  withCredentials: true,
  headers: {
    // Accept: 'application/json',
  }
});

export default client;