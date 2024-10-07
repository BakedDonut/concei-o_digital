import * as SecureStore from 'expo-secure-store';
import { User } from '../@types/user';

export async function saveAcessTokenStorage(token: string) {
    try {
        await SecureStore.setItemAsync('acess_token', JSON.stringify(token));
    } catch (error) {
        console.error('Error saving acess_token data', error);
    }
}

export async function getAcessTokenStorage() {
    try {
        return await SecureStore.getItemAsync('acess_token');
    } catch (error) {
        console.error('Error saving acess_token data', error);
    }
}


export async function deleteAcessTokenStorage() {
    try {
        await SecureStore.deleteItemAsync('acess_token');
    } catch (error) {
        console.error('Error saving acess_token data', error);
    }
}
