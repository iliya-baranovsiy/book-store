import { api } from "../api/axios";
import type { TBookResponse } from "../types/book.types";
import type {TBookOneResponse} from "../types/book.types"

export async function getAllBooks(page: number): Promise<TBookResponse>{
    const response = await api.get<TBookResponse>("/books",{
        params: {
            page
        }
    })
    return response.data
}

export async function getBook(book_id:number): Promise<TBookOneResponse>{
    const response = await api.get("/books/{book_id}",{
        params:{
            book_id
        }
    })
    return response.data
}