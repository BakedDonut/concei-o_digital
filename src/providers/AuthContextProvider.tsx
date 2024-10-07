import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../@types/user'; // Definição do tipo User
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import api from '../api/api';
import { deleteUserStorage, getUserStorage } from '../storage/UserStorage';

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void; // Adiciona setUser ao contexto
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = await getAcessTokenStorage();
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`;
                try {
                    const dataUserString = await getUserStorage();
                    const dataUser = dataUserString ? JSON.parse(dataUserString) : null;
                    setUser(dataUser); // Atualiza o estado do usuário
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                    // Lógica adicional para lidar com falhas na autenticação
                }
            }
        };

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            await deleteAcessTokenStorage(); // Remove o token
            await deleteUserStorage(); // Remove os dados do usuário
            setUser(null); // Limpa o usuário
            delete api.defaults.headers.Authorization; // Remove o cabeçalho de autorização
        } catch (error) {
            console.error('Logout failed:', error);
            // Feedback para o usuário em caso de erro
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
