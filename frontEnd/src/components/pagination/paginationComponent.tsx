import getPagination from "./paginationFunc";
import MobilePagination from "./mobilePaginationComponent";
import PreviewComponent from "./prevComponent";
import NextComponent from "./nextComponent";
import DeckstopPagination from "./deckstopPagination";

export default function Pagination({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}) {
  let pagination_mobile = getPagination(page, totalPages, true);
  let pagination = getPagination(page, totalPages, false);

  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mt-14 md:mt-23 lg:mt-18">
      <div className="flex flex-row justify-between items-center">
        <PreviewComponent page={page} setPage={setPage} />
        <div>
          <MobilePagination
            page={page}
            setPage={setPage}
            pagination_mobile={pagination_mobile}
          />
          <DeckstopPagination
            page={page}
            setPage={setPage}
            pagination_deckstop={pagination}
          />
        </div>
        <NextComponent page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </div>
  );
}
