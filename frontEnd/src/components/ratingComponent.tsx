import GreyStar from "./../assets/icons/stargrey.png";
import BlackStar from "./../assets/icons/starblack.png";

export default function Rating({
  rating,
  cost,
}: {
  rating: number;
  cost: number;
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="font-head font-normal text-[24px] tracking-normal">
        ${cost}
      </h3>
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
  );
}
