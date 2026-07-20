import GreyStar from "../../assets/icons/stargrey.png";
import BlackStar from "../../assets/icons/starblack.png";


export default function ReviewDetail({
  text,
  rating,
  reviewer,
}: {
  text: string;
  rating: number;
  reviewer: string;
}) {
  return (
    <div className="w-full flex flex-col border border-grey pl-5">
      <div className="flex flex-row gap-4 items-center mb-5">
        <div className="text-[16px] font-inter text-black font-bold">{reviewer}</div>
        <div className="flex flex-row gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={index < rating ? BlackStar : GreyStar}
              alt="star"
              className="w-4 h-4 shrink-0"
            ></img>
          ))}
        </div>
      </div>
      <span>{text}</span>
    </div>
  );
}
