import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart.png";
import ProfileIcon from "../assets/icons/profile.png";
import SavedIcon from "../assets/icons/saved.png";
import MenuIcon from "../assets/icons/menu.png";

export default function IconsSet() {
  return (
    <div className="flex flex-row md:gap-2">
      <Link to={"/saved"}>
        <img src={SavedIcon} alt="saved" className="hidden lg:block"></img>
      </Link>
      <Link to={"/cart"}>
        <img src={CartIcon} alt="cart" className="max-w-none md:max-w-full"></img>
      </Link>
      <Link to={"/profile"}>
        <img src={ProfileIcon} alt="profile" className="hidden lg:block"></img>
      </Link>
      <Link to={"/menu"}>
        <img src={MenuIcon} alt="menu" className="block max-w-none lg:hidden md:max-w-full"/>
      </Link>
    </div>
  );
}
