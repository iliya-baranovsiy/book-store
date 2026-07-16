import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../services/bookService";
import { getBook } from "../services/bookService";

export function useBooks(page: number, q?: string) {
  return useQuery({
    queryKey: ["books", page, q],
    queryFn: () => getAllBooks(page, q),
  });
}

export function useBook(bookId: number) {
  return useQuery({
    queryKey: ["book", bookId],
    queryFn: () => getBook(bookId),
  });
}
