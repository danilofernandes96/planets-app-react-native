import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-planet-server.herokuapp.com',
});

export default api;
