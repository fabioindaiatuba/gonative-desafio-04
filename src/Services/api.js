import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.111:3000',
});

export default api;
