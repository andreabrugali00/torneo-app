import axios from 'axios';

const apiClient  = axios.create({
  baseURL: 'http://localhost:3000', // URL del tuo backend Express
  timeout: 5000,
});

export default apiClient;
