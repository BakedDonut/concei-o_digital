import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../@types/user'; // Definição do tipo User
import { deleteAcessTokenStorage, getAcessTokenStorage } from '../storage/SessionStorage';
import api from '../api/api';
import { deleteUserStorage, getUserStorage } from '../storage/UserStorage';

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); // Indica se o carregamento está em andamento

    useEffect(() => {
        const fetchUser = async () => {
            const token = await getAcessTokenStorage();
            if (token) {
                try {
                    const dataUserString = await getUserStorage();
                    const dataUser = dataUserString ? JSON.parse(dataUserString) : null;
                    setUser(dataUser);
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                    await logout(); // Executa logout em caso de erro
                }
            }
            setLoading(false); // Carregamento inicial completo
        };

        fetchUser();
    }, []);

    const logout = async () => {
        try {
            await deleteAcessTokenStorage();
            await deleteUserStorage();
            setUser(null);
            delete api.defaults.headers.Authorization;
        } catch (error) {
            console.error('Logout failed:', error);
            // Feedback adicional para o usuário em caso de erro
        }
    };

    if (loading) {
        return null; // Ou renderize um componente de carregamento, se preferir
    }

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
