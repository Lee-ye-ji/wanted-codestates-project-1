import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});
axios.defaults.headers = {
  Accept: 'application/vnd.github.v3+json',
};
export default api;
