import NextIcon from "./../../assets/icons/right.png";

export default function NextComponent({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}) {
  return (
    <div className="flex flex-row gap-0.5 justify-center cursor-pointer">
      <span
        onClick={() => (page < totalPages ? setPage(page + 1) : null)}
        className={`text-4 text-${page < totalPages ? "black" : "greytext"} hidden md:block`}
      >
        Next
      </span>
      <img
        src={NextIcon}
        alt="next"
        onClick={() => (page < totalPages ? setPage(page + 1) : null)}
      ></img>
    </div>
  );
}
