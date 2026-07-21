import type { TBook } from "./book.types"

export type TUser = {
    id: number,
    name: string,
    email:string,
}

export type TSavedBooks = {
  books: TBook[]
}