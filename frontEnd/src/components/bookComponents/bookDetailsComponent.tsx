import BarComponent from "../barComponent";
import Rating from "../ratingComponent";
import TextComponent from "./bookTextComponent";
import MoreDetailsComponent from "./moreDetailsComponent";
import Button from "./buttonComponent";
import PreviewButtonComponent from "./previewButtonComponent";


export default function BookDetailsComponent({
  cost,
  rating,
  authors,
  publisher,
  language,
  format,
  tags,
}: {
  cost: number;
  rating: number;
  authors: string;
  publisher: string;
  language: string;
  format: string;
  tags: string
}) {
  return (
    <div className="w-[85%] md:w-[89.6%] lg:w-[48.5%]">
      <BarComponent position="top" />
      <div className="mt-10">
        <Rating cost={cost} rating={rating} textSize={40} />
        <div className="mt-6 flex flex-col justify-between mb-9 md:mb-12 lg:mb-20">
          <TextComponent atr="Authors" data={authors} />
          <TextComponent atr="Publisher" data={publisher} />
          <TextComponent atr="Language" data={language} />
          <TextComponent atr="Format" data={format} />
          <MoreDetailsComponent tags={tags}/>
        </div>
        <Button text="ADD TO CART" handleClick={() => {}}/>
        <PreviewButtonComponent />
      </div>
    </div>
  );
}
