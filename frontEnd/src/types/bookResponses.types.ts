import type { TBook } from "./book.types";

export type TBookResponse = {
  items: TBook[];
  pages: number;
};

export type TBookOneResponse = {
  book: TBook;
  similar: TBook[];
};
