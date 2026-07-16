import type { TShortBookResponse } from "../types/bookResponses.types";
import SearchBook from "./searchBook";

export default function SearchResult({ books, closeWindows }: { books: TShortBookResponse, closeWindows: () => void }) {
  return (
    <div className="absolute top-16 left-0 w-ful bg-white z-50 border border-grey" onClick={closeWindows}>
      {books.items.map((book) => (
        <SearchBook
          key={book.id}
          picture={book.pictureUrl}
          title={book.title}
          id={book.id}
        />
      ))}
    </div>
  );
}