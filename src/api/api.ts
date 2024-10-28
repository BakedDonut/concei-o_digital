import { baseUrlApi } from '@env';
import axios from 'axios';
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import { deleteUserStorage } from '../storage/UserStorage';

const api = axios.create({
    baseURL: baseUrlApi,
});

// Interceptor para incluir o token em cada requisição, se disponível
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

// Interceptor para lidar com erros de resposta
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            console.error('Unauthorized: Please log in again.');

            // Limpa o token e os dados do usuário ao detectar um erro 401
            await deleteAcessTokenStorage();
            await deleteUserStorage();
            delete api.defaults.headers.common.Authorization; // Remove o cabeçalho de autorização

            // Aqui, você pode redirecionar o usuário para a tela de login, se necessário
            // Exemplo: navigation.navigate('Login');

            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default api;
