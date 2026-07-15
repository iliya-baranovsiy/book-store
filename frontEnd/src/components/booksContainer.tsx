import type { TBookResponse } from "../types/bookResponses.types";
import BookComponent from "./bookComponent";

export default function BooksContainer({ data }: { data: TBookResponse }) {
  let author: string
  return (
    <div className="grid grid-cols-1 gap-9 mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
      {data?.items.map((book) => (
        <BookComponent
          key={book.id}
          id={book.id}
          title={book.title}
          imgUrl={book.picture_url}
          author={book.authors.map((author) => (author.name)).join(", ")}
          publisher={book.publisher}
          cost={book.cost}
          rating={book.rating}
        />
      ))}
    </div>
  );
}
