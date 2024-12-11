import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface RefreshContextType {
    refresh: boolean;
    setRefresh: (e: boolean) => void;
}

export const RefreshListContext = createContext<RefreshContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const RefreshListProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [refresh, setRefresh] = useState<boolean>(false); // Corrected state type to boolean

    return (
        <RefreshListContext.Provider value={{ refresh, setRefresh }}>
            {children}
        </RefreshListContext.Provider>
    );
};

