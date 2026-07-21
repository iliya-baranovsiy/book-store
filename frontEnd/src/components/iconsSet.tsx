import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart.png";
import ProfileIcon from "../assets/icons/profile.png";
import SavedIcon from "../assets/icons/saved.png";
import SavedFullIcon from "../assets/icons/savedFull.png"
import MenuIcon from "../assets/icons/menu.png";
import CloseIcon from "../assets/icons/close.png";
import BurgerMenu from "./burgerMenu";
import { useSaved } from "../hooks/useBooks";

export default function IconsSet({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {data: saved} = useSaved()
  const hasSaved =( saved?.books.length ?? 0) >0
  return (
    <>
      <div className="flex flex-row md:gap-2">
        <Link to={"/saved"}>
          <img src={hasSaved? SavedFullIcon: SavedIcon} alt="saved" className="hidden lg:block"></img>
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
          className={`${isOpen ? "object-contain lg:hidden" : "block max-w-none lg:hidden md:max-w-full"}`}
          onClick={() => setOpen(!isOpen)}
        />
      </div>
      {isOpen && (<BurgerMenu setOpen={setOpen}/>)}
    </>
  );
}
