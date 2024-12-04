import { baseUrlApi } from '@env';
import axios from 'axios';
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import { deleteUserStorage } from '../storage/UserStorage';
import { useAuth } from '../providers/AuthContextProvider';

const api = axios.create({
    baseURL: baseUrlApi,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
});

api.interceptors.request.use(
    async (config) => {
        const token = await getAcessTokenStorage(); 
        console.log('token', token);
               
        if (token) {
            // Remove qualquer aspas extras que possam ter sido adicionadas ao redor do token
            config.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.log('Erro 401:', error.response);
            // Aqui você pode analisar a resposta com mais detalhes
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);


export default api;