import { api } from "../api/axios";
import type { TBookResponse } from "../types/book.types";

export async function getAllBooks(page: number): Promise<TBookResponse>{
    const response = await api.get<TBookResponse>("/books",{
        params: {
            page
        }
    })
    return response.data
}