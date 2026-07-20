import GreyStar from "../../assets/icons/stargrey.png";
import BlackStar from "../../assets/icons/starblack.png";

export default function StarRting({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-row w-full gap-2 items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} type="button" onClick={() => onChange(star)}>
            <img src={star <= value? BlackStar: GreyStar} alt="star" className="w-full h-max shrink-0"></img>
        </button>
      ))}
    </div>
  );
}
