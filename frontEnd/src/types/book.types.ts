import type { TUser } from "./user.types";

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

export type TBookDetail = TBook & {
  tags: TTag[];
  reviews: TReview[];
};

export type TAuthor = {
  id: number;
  name: string;
  biography: string;
};

export type TTag = {
  id: number;
  tag: string;
};

export type TReview = {
  id: number;
  bookId: number;
  reviewer: TUser;
  review: string;
  rating: number;
};

export type TShortBookData = {
  id: number;
  title: string;
  pictureUrl: string;
};
