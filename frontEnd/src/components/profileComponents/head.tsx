import BackIcon from "../../assets/icons/back.png";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <Link to={"/"}>
        <img src={BackIcon} alt="back"></img>
      </Link>
      <h3 className="text-[32px] md:text-[56px] text-black font-head mb-9 md:mb-12">ACCOUNT</h3>
      <h4 className="font-head text-black text-[24px]">PROFILE</h4>
    </div>
  );
}
