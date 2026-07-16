import { Link } from "react-router-dom";
import BookPicture from "./bookPictureComponent";

export default function SearchBook({
  id,
  title,
  picture,
}: {
  id: number;
  title: string;
  picture: string;
}) {
  return (
    <Link to={`/books/${id}`}>
      <div className="flex flex-row gap-5 h-25 border-b border-grey py-5 pl-5 pr-20">
        <BookPicture imgUrl={picture}/>
        <h4>{title}</h4>
      </div>
    </Link>
  );
}
