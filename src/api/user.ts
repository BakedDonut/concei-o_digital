import { User } from "../@types/user";
import api from "./api";

export async function loginUserApi(email: string, password: string){
    try {
        const response = await api.post('/user/login',{
            email,
            password
        });
        return response.data.user as User[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}