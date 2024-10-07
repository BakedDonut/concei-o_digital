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
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json() as {
            user: User;
            access_token: string;
        };
    } catch (error) {
        console.error(error);
        throw error;
    }
}
