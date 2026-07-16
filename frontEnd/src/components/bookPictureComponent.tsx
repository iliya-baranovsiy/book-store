import { useState } from "react";

const colors = ["bg-blue", "bg-green", "bg-purple", "bg-orange"];
export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function BookPicture({imgUrl}:{imgUrl: string;}) {
    const [color] = useState(getRandomColor)

    return (
        <div className={`${color} justify-items-center flex shrink-0`}>
          <img
            src={`${import.meta.env.VITE_API_URL}/${imgUrl}`}
            alt="book picture"
          ></img>
        </div>
    )
}