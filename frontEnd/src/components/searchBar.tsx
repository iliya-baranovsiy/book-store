import SearchIcon from "./../assets/icons/Search.png";

export default function SearchBar() {
  return (
    <div className="hidden lg:ml-[13.48%] lg:mr-[9.38%] lg:w-[48.39%] lg:h-[53%] lg:border-2 border-grey lg:flex lg:flex-row lg:items-center lg:pl-5">
      <form className="w-[88.9%] h-full border-0">
        <input
          type="search"
          placeholder="Search"
          className="w-full h-full outline-0 appearance-none"
        />
      </form>
      <img src={SearchIcon} alt="search" className="w-6 h-6" />
    </div>
  );
}
