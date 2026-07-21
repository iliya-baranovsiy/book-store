import BackIcon from "../../assets/icons/back.png";
import { Link } from "react-router-dom";

export default function HeadFav() {
  return (
    <div className="flex flex-col gap-2 mb-9 md:mb-12">
      <Link to={"/"}>
        <img src={BackIcon} alt="back"></img>
      </Link>
      <h3 className="text-[32px] md:text-[56px] text-black font-head">
        FAVORITES
      </h3>
    </div>
  );
}
