import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../services/bookService";

export function useBooks(page: number){
    return useQuery({
        queryKey:["books",page],
        queryFn: () => getAllBooks(page),
    })
}