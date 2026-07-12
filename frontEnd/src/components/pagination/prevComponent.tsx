import PreventIcon from "./../../assets/icons/left.png";

export default function PreviewComponent({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <div className="flex flex-row gap-0.5 justify-center cursor-pointer">
      <img
        src={PreventIcon}
        alt="prevent"
        onClick={() => (page > 1 ? setPage(page - 1) : null)}
      ></img>
      <span
        onClick={() => (page > 1 ? setPage(page - 1) : null)}
        className={`text-4 text-${page > 1 ? "black" : "greytext"} hidden md:block`}
      >
        Prev
      </span>
    </div>
  );
}
