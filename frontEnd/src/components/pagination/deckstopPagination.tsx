import type { TPagination } from "../../types/pagination.types";

export default function DeckstopPagination({
  pagination_deckstop,
  page,
  setPage,
}: {
  pagination_deckstop: TPagination;
  page: number;
  setPage: (page: number) => void;
}) {
    return (
        <div className=" hidden md:flex gap-8 cursor-pointer">
            {pagination_deckstop.pagination.map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="text-greytext text-4">...</span>
            ) : (
              <button
                key={`${item}-${index}`}
                onClick={() => setPage(item as number)}
                className={item === page ? "font-bold text-black" : "text-greytext text-4 leading-6 cursor-pointer"}
              >
                {item}
              </button>
            ),
          )}
        </div>
    )
}
