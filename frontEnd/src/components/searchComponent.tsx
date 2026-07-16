import { useSearchParams } from "react-router-dom";
import type { TShortBookResponse } from "../types/bookResponses.types";
import SearchBook from "./searchBook";

export default function SearchResult({
  books,
  closeWindows,
  search,
}: {
  books: TShortBookResponse;
  closeWindows: () => void;
  search: string;
}) {
  const [, setSearchParams] = useSearchParams();
  const handleAllResults = () => {
    setSearchParams({ page: "1", q: search });
    closeWindows();
  };

  return (
    <div
      className="absolute top-16 left-0 w-ful bg-white z-50 border border-grey hidden lg:block"
      onClick={closeWindows}
    >
      {books.items.map((book) => (
        <SearchBook
          key={book.id}
          picture={book.pictureUrl}
          title={book.title}
          id={book.id}
        />
      ))}
      <a className="h-14 text-greytext flex items-center justify-center cursor-pointer" onClick={handleAllResults}>
        All results
      </a>
    </div>
  );
}
