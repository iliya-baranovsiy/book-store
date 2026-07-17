import { api } from "../api/axios";

export async function register(name: string, email:string, password:string){
    const response = await api.post("/auth/register", {
        name,
        email,
        password
    })
    return response.status
}