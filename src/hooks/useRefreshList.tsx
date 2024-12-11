import { useContext } from "react";
import { RefreshContextType, RefreshListContext } from "../providers/RefreshListProvider";

// Custom hook to use the RefreshContext
export const useRefreshList = (): RefreshContextType => {
    const context = useContext(RefreshListContext);
    if (!context) {
        throw new Error('useRefresh must be used within an AuthProvider');
    }
    return context;
};
