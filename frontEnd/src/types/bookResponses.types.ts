import type { TBook } from "./book.types";
import type { TBookDetail } from "./book.types";

export type TBookResponse = {
  items: TBook[];
  pages: number;
};

export type TBookDetailResponse = {
  book: TBookDetail;
  similar: TBook[];
};
