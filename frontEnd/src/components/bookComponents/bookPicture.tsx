import { useState } from "react";
import { getRandomColor } from "../bookPictureComponent";
import ToSaveIcon from "../../assets/icons/toSave.png"

export default function BookPictureComponent({ imgUrl }: { imgUrl: string }) {
  const [color] = useState(getRandomColor());

  return (
    <div className={`${color} justify-items-center w-[85%] md:w-[89.6%] lg:w-[48.5%] relative`}>
      <img src={ToSaveIcon} className="top-0 right-0 absolute" alt="save"></img>
      <img
        src={`${import.meta.env.VITE_API_URL}/${imgUrl}`}
        alt="book picture"
      ></img>
    </div>
  );
}
