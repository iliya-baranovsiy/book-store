import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/back.png";

export default function BookTitleComponent({
  title,
  prevent_page,
}: {
  title: string;
  prevent_page: string;
}) {
  return (
    <div className="flex flex-col mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mt-14 md:mt-18 mb-9, md:mb-12">
      <div>
        <Link to={prevent_page}>
            <img src={BackIcon} alt="back"></img>
        </Link>
      </div>
      <div className="font-head font-normal text-[40px] leading-16 tracking-normal mt-7.25 md:mt-9.25 ">
        {title}
      </div>
    </div>
  );
}
