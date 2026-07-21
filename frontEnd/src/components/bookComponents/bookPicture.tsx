import { useState, useEffect } from "react";
import { getRandomColor } from "../bookPictureComponent";
import ToSaveIcon from "../../assets/icons/toSave.png";
import FromSaveIcon from "../../assets/icons/fromSave.png";
import { useSaved } from "../../hooks/useBooks";
import { useParams } from "react-router-dom";
import { addSaved, deleteSaved } from "../../services/userService";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function BookPictureComponent({ imgUrl }: { imgUrl: string }) {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const [color] = useState(getRandomColor());
  const [isSaved, setSaved] = useState(Boolean);

  const { data: saved } = useSaved();

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setSaved(saved?.books.some((book) => book.id === Number(id)) ?? false);
  }, [saved, id]);

  async function handleClick() {
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }
    if (isSaved) {
      await deleteSaved(Number(id));
    } else {
      await addSaved(Number(id));
    }
    queryClient.invalidateQueries({
      queryKey: ["saved"],
    });
  }

  return (
    <div
      className={`${color} w-[85%] md:w-[89.6%] lg:w-[48.5%] relative flex items-center justify-center`}
    >
      <img
        src={isSaved ? FromSaveIcon : ToSaveIcon}
        className="top-0 right-0 absolute cursor-pointer"
        alt="save"
        onClick={handleClick}
      ></img>
      <img
        src={`${import.meta.env.VITE_API_URL}/${imgUrl}`}
        alt="book picture"
      ></img>
    </div>
  );
}
