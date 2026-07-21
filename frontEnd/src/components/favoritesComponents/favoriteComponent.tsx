import HeadFav from "./headFavorite";
import { useSaved } from "../../hooks/useBooks";
import FavotiteContent from "./contentComponent";

export default function Favorite() {
  const { data: saved } = useSaved();
  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mt-14 md:mt-18">
      <HeadFav />
      <div className="flex flex-col gap-9 md:gap-12 mb-20">
        {saved?.books.map((book) => (
          <FavotiteContent key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
