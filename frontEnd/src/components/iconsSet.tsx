import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart.png";
import ProfileIcon from "../assets/icons/profile.png";
import SavedIcon from "../assets/icons/saved.png";

export default function IconsSet() {
  return (
    <div className="flex flex-row gap-2">
      <Link to={"/saved"}>
        <img src={SavedIcon} alt="saved"></img>
      </Link>
      <Link to={"/cart"}>
        <img src={CartIcon} alt="cart"></img>
      </Link>
      <Link to={"/profile"}>
        <img src={ProfileIcon} alt="profile"></img>
      </Link>
    </div>
  );
}
