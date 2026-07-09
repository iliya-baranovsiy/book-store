import { api } from "../api/axios";
import type { TBook } from "../types/book.types";

export async function getAllBooks(page: number): Promise<TBook[]>{
    const response = await api.get<TBook[]>("/books",{
        params: {
            page
        }
    })
    return response.data
}