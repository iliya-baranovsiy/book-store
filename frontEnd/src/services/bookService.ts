import { api } from "../api/axios";
import type { TBookResponse } from "../types/bookResponses.types";
import type { TBookDetailResponse } from "../types/bookResponses.types";
import type { TShortBookResponse } from "../types/bookResponses.types";

export async function getAllBooks(page: number): Promise<TBookResponse> {
  const response = await api.get<TBookResponse>("/books", {
    params: {
      page,
    },
  });
  return response.data;
}

export async function getBook(book_id: number): Promise<TBookDetailResponse> {
  const response = await api.get("/books/{book_id}", {
    params: {
      book_id,
    },
  });
  return response.data;
}

export async function getSearchBooks(searchText: string):Promise<TShortBookResponse> {
  const response = await api.get("/books/search", {
    params: {
      q: searchText,
    },
  });
  return response.data;
}
