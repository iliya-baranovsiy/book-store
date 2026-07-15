import { useState } from "react";
import OpenIcon from "../../assets/icons/open.png";
import TextComponent from "./bookTextComponent";

export default function MoreDetailsComponent({tags}:{tags: string}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-row gap-1 items-center cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="text-black text-[16px] leading-8">More details</span>
        <img src={OpenIcon} alt="open" className="w-2 h-4 object-contain"></img>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="text-gray-600">
          <TextComponent atr="Tags" data={tags}/>
        </div>
      </div>
    </>
  );
}
