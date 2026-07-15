export type TBook = {
  id: number;
  title: string;
  description: string;
  authors: TAuthor[];
  publisher: string;
  language: string;
  format: string;
  rating: number;
  cost: number;
  picture_url: string;
};

export type TAuthor = {
  id: number;
  name: string;
  biography: string;
}



