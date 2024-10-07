import { baseUrlApi } from '@env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import { deleteUserStorage } from '../storage/UserStorage';

const api = axios.create({
  baseURL: baseUrlApi,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = await getAcessTokenStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // Check if the error status is 401
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized: Please log in again.');
      // Optional: Redirect to login or show a message
      deleteAcessTokenStorage(); // Remove o token
      deleteUserStorage(); // Remove os dados do usuário
      delete api.defaults.headers.Authorization; // Remove o cabeçalho de autorização
    }

    return Promise.reject(error);
  }
);

export default api;
