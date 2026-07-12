import getPagination from "./paginationFunc";
import PreventIcon from "./../../assets/icons/left.png";
import NextIcon from "./../../assets/icons/right.png";
import MobilePagination from "./mobilePaginationComponent";

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
        <img src={PreventIcon} alt="prevent" onClick={() => page>1 ?setPage(page-1): null}></img>
        <div className="md:hidden">
          <MobilePagination page={page} setPage={setPage} pagination_mobile={pagination_mobile}/>
        </div>
        <img src={NextIcon} alt="next" onClick={() => page<totalPages ?setPage(page+1): null}></img>
      </div>
    </div>
  );
}
