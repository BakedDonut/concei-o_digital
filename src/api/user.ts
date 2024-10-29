import { baseUrlApi } from "@env";
import { User } from "../@types/user";

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

        return await response.text() as unknown as {
            user: User;
            access_token: string;
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

