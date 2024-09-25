import { baseUrlApi } from '@env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
  baseURL: baseUrlApi,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItem('token');
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
  async (error) => {
    const originalRequest = error.config;

    // Check if the error status is 401 and originalRequest._retry is not set
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await SecureStore.getItem('refreshToken');
        const response = await axios.post(`${baseUrlApi}/api/refresh-token`, { refreshToken });
        const { token } = response.data;

        await SecureStore.setItem('token', token);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);  // Use the `api` instance for the retry
      } catch (error) {
        // Handle refresh token error or redirect to login
        console.error('Refresh token error:', error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

