import * as SecureStore from 'expo-secure-store';
import { User } from '../@types/user';
import { useAuth } from '../providers/AuthContextProvider';

export async function saveUserStorage(user: User) {
    try {
        await SecureStore.setItemAsync('user', JSON.stringify(user));
    } catch (error) {
        console.error('Error saving user data', error);
    }
}

export async function getUserStorage() {
    try {
        const storedData = await SecureStore.getItemAsync('user');
        if (!storedData) {
            return null;
        }        
        
        return JSON.parse(storedData) as User;
    } catch (error) {
        console.error('Error saving user data', error);
    }
}


export async function deleteUserStorage() {
    try {
        await SecureStore.deleteItemAsync('user');
    } catch (error) {
        console.error('Error saving user data', error);
    }
}
