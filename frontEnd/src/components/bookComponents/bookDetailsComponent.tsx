import BarComponent from "../barComponent";
import Rating from "../ratingComponent";
import TextComponent from "./bookTextComponent";
import OpenIcon from "../../assets/icons/open.png"

export default function BookDetailsComponent({
  cost,
  rating,
  authors,
  publisher,
  language,
  format,
}: {
  cost: number;
  rating: number;
  authors: string;
  publisher: string;
  language: string;
  format: string;
}) {
  return (
    <div className="w-[85%] md:w-[89.6%] lg:w-[48.5%]">
      <BarComponent position="top" />
      <div className="mt-10">
        <Rating cost={cost} rating={rating} textSize={40} />
        <div className="mt-6 flex flex-col justify-between">
          <TextComponent atr="Authors" data={authors} />
          <TextComponent atr="Publisher" data={publisher} />
          <TextComponent atr="Language" data={language} />
          <TextComponent atr="Format" data={format} />
          <div className="flex flex-row gap-1 items-center">
            <span className="text-black text-[16px] leading-8">More details</span>
            <img src={OpenIcon} alt="open" className="w-2 h-4 object-contain"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
