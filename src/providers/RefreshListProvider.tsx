import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RefreshContextType {
    refresh: boolean;
    setRefresh: (e: boolean) => void;
}

const AuthContext = createContext<RefreshContextType>();

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [refresh, setRefresh] = useState<AuthProviderProps>();

    return (
        <AuthContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </AuthContext.Provider>
    );
};


