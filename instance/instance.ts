import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.serveskotkov.uz/api/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });