import SearchBar from "./searchBar";
import IconsSet from "./iconsSet";

export default function Header() {
  return (
    <header className="w-8/12 mx-auto flex flex-row items-center h-26 justify-center">
      <h2 className="font-head font-normal text-[40px] leading-16 tracking-normal whitespace-nowrap ">Book Store</h2>
      <SearchBar />
      <IconsSet />
    </header>
  );
}
