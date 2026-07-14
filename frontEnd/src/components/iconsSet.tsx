import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart.png";
import ProfileIcon from "../assets/icons/profile.png";
import SavedIcon from "../assets/icons/saved.png";
import MenuIcon from "../assets/icons/menu.png";
import CloseIcon from "../assets/icons/close.png";
import BurgerMenu from "./burgerMenu";

export default function IconsSet({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="flex flex-row md:gap-2">
        <Link to={"/saved"}>
          <img src={SavedIcon} alt="saved" className="hidden lg:block"></img>
        </Link>
        <Link to={"/cart"}>
          <img
            src={CartIcon}
            alt="cart"
            className="max-w-none md:max-w-full"
          ></img>
        </Link>
        <Link to={"/profile"}>
          <img
            src={ProfileIcon}
            alt="profile"
            className="hidden lg:block"
          ></img>
        </Link>
        <img
          src={isOpen ? CloseIcon : MenuIcon}
          alt="menu"
          className={`${isOpen ? "object-contain" : "block max-w-none lg:hidden md:max-w-full"}`}
          onClick={() => setOpen(!isOpen)}
        />
      </div>
      {isOpen && (<BurgerMenu closeMenu={() => {setOpen(false)}}/>)}
    </>
  );
}
