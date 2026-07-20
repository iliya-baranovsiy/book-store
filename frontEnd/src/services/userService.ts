import { api } from "../api/axios";
import type { TUser } from "../types/user.types";

export async function getProfile() {
    const response = await api.get<TUser>("/user/profile")
    return response.data
}