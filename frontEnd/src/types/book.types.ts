export type TBook = {
  id: number;
  title: string;
  description: string;
  author: string;
  publisher: string;
  language: string;
  format: string;
  rating: number;
  cost: number;
  picture_url: string;
};

export type TBookResponse = {
  items: TBook[];
  total: number;
  pages: number;
};


export type TBookOneResponse = {
  book: TBook;
  similar: TBook[];
}