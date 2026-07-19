import SearchBar from "./searchBar";
import Button from "./bookComponents/buttonComponent";
import BarComponent from "./barComponent";
import CloseIcon from "../assets/icons/close.png";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function BurgerMenu({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate()

  async function handleAuthClick() {
    if (isAuthenticated) {
      await logout();
      setOpen(false);
    } else {
      navigate("/auth");
      setOpen(false);
    }
  }

  return (
    <>
      <div
        className="fixed md:inset-0 bg-black/50 z-40 lg:hidden"
        onClick={() => setOpen(false)}
      ></div>
      <div className="fixed hidden top-0 right-0 bg-white md:w-[48%] h-26 z-50 md:flex items-center justify-between pr-[6.5%]">
        <div></div>
        <img src={CloseIcon} alt="close" onClick={() => (setOpen(false))}></img>
        <BarComponent position="bottom" />
      </div>
      <div className="fixed left-0 flex flex-col min-h-screen top-26 w-full bg-white lg:hidden pt-14 px-[7.5%] md:px-[6.5%] z-50 md:w-[48%] md:left-auto md:right-0">
        <SearchBar hidden={false} />
        {isAuthenticated? <div className="flex flex-col md:gap-12 gap-9 mb-38 items-center">
          <a href="/favorites" className="font-head text-black text-[32px]">Favorites</a>
          <a href="/cart" className="font-head text-black text-[32px]">Cart</a>
        </div>:<div className="mb-66"></div>}
        <Button text={isAuthenticated ? "LOG OUT" : "SIGN IN"} handleClick={handleAuthClick}/>
      </div>
    </>
  );
}
