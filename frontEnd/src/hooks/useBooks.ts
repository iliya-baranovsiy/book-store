import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../services/bookService";
import { getBook } from "../services/bookService";

export function useBooks(page: number){
    return useQuery({
        queryKey:["books",page],
        queryFn: () => getAllBooks(page),
    })
}

export function useBook(bookId: number){
    return useQuery({
        queryKey:["book", bookId],
        queryFn: () => getBook(bookId)
    })
}