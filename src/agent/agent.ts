import axios from 'axios';

import { API_KEY, API_URL } from 'src/constants';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default agent;
