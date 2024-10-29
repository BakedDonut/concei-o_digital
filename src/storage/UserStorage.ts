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
        return await SecureStore.getItemAsync('user');
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
