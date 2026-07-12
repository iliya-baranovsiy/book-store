import type { TPagination } from "../../types/pagination.types"

export default function MobilePagination({pagination_mobile, page, setPage}:{pagination_mobile: TPagination, page: number, setPage: (page: number) => void}){
    return (
        <div className="flex gap-8">
            {pagination_mobile.pagination.map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="text-greytext text-4">...</span>
            ) : (
              <button
                key={`${item}-${index}`}
                onClick={() => setPage(item as number)}
                className={item === page ? "font-bold text-black" : "text-greytext text-4 leading-6"}
              >
                {item}
              </button>
            ),
          )}
        </div>
    )
}