import DotsIcon from "../../assets/icons/dots.png";
import FaseBookIcon from "../../assets/icons/facebook.png";
import TwitterIcon from "../../assets/icons/twitter.png";

export default function SocialMediaIcons() {
  return (
    <div className="h-6 mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mt-9 md:mt-12 mb-14 md:mb-18">
      <div className="w-30 h-full flex flex-row justify-between">
        <a href="https://www.facebook.com">
          <img src={FaseBookIcon} alt="facebook" />
        </a>
        <a href="https://x.com">
          <img src={TwitterIcon} alt="twitter" />
        </a>
        <a className="cursor-pointer">
          <img src={DotsIcon} alt="more" />
        </a>
      </div>
    </div>
  );
}
