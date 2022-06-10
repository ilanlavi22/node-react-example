import axios from 'axios';
const api = axios.create({ baseURL: 'http://localhost:3010' });

export const listPets = () =>
  api.get('/pet/list').then((response) => response.data);