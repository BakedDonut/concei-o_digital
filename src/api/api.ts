import { baseUrlApi } from '@env';
import axios from 'axios';
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import { deleteUserStorage } from '../storage/UserStorage';
import { useAuth } from '../providers/AuthContextProvider';

const api = axios.create({
    baseURL: baseUrlApi,
});


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

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            const {logout} = useAuth();

            await deleteAcessTokenStorage();
            await deleteUserStorage();
            delete api.defaults.headers.common.Authorization;
            logout();
           
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default api;