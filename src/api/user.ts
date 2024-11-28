import { baseUrlApi } from "@env";
import { User } from "../@types/user";
import api from "./api";

export async function loginUserApi(email: string, password: string) {
    try {
        const response = await fetch(baseUrlApi+'/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Obter a mensagem de erro
            console.error('Erro de login:', errorMessage);
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        return {
            user: data.user,
            access_token: data.access_token
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateUserApi(name:string, email:string, password: string){
    try {
        const response = await api.post('/typeEvent', {
            name,
            email,
            password
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}