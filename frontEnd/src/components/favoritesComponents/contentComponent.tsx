import type { TBook } from "../../types/book.types";
import BookPicture from "../bookPictureComponent";
import BarComponent from "../barComponent";
import Rating from "../ratingComponent";
import BlackHeart from "../../assets/icons/fromSave.png";
import WhiteHeart from "../../assets/icons/whiteHeart.png";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { deleteSaved } from "../../services/userService";
import { useQueryClient } from "@tanstack/react-query";

export default function FavotiteContent({ book }: { book: TBook }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleClick() {
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }
    await deleteSaved(Number(book.id));
    queryClient.invalidateQueries({
      queryKey: ["saved"],
    });
  }

  return (
    <div className="relative">
      <div className="relative mb-8 md:mb-12 flex flex-col md:flex-row gap-5">
        <img
          src={WhiteHeart}
          alt="fromSave"
          className="absolute top-0 right-0 hidden md:block cursor-pointer"
          onClick={handleClick}
        ></img>
        <div className="md:h-20 md:w-30 relative">
          <img
            src={BlackHeart}
            alt="fromSave"
            className="absolute top-0 right-0 md:hidden cursor-pointer"
            onClick={handleClick}
          ></img>
          <BookPicture imgUrl={book.picture_url} />
        </div>
        <div>
          <h4 className="text-[24px] font-head ">{book.title}</h4>
          <span className="font-inter text-[16px] text-greytext mb-6 block">
            {book.authors.map((author) => author.name).join("")}
          </span>
          <Rating cost={book.cost} textSize={24} rating={book.rating} />
        </div>
      </div>
      <BarComponent position="bottom" />
    </div>
  );
}
