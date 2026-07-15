import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Rating from "./ratingComponent";
import BookPicture from "./bookPictureComponent";

export default function BookComponent({
  id,
  title,
  imgUrl,
  author,
  publisher,
  cost,
  rating,
}: {
  id: number;
  title: string;
  imgUrl: string;
  author: string;
  publisher: string;
  cost: number;
  rating: number;
}) {
  const location = useLocation();
  return (
    <Link to={`/books/${id}`} state={{ from: location.pathname + location.search}}>
      <div className="grid grid-cols-1 gap-5">
        <BookPicture imgUrl={imgUrl} />
        <div>
          <h3 className="font-head font-normal text-[24px] tracking-normal mb-[4.76%]">
            {title}
          </h3>
          <span className="text-greytext text-[16px] leading-6 mb-[23.8%] block h-6">
            by {author}, {publisher}
          </span>
          <Rating rating={rating} cost={cost} textSize={24}/>
        </div>
      </div>
    </Link>
  );
}
