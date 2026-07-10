import SearchIcon from "./../assets/icons/Search.png"

export default function SearchBar() {
  return (
    <div className="ml-[13.48%] mr-[9.38%] w-[48.39%] h-[53%] border-2 border-grey flex flex-row items-center pl-5">
      <form className="w-[88.9%] h-full border-0">
        <input type="search" placeholder="Search" className="w-full h-full outline-0 appearance-none"/>
      </form>
      <img src={SearchIcon} alt="search" className="w-6 h-6"/>
    </div>
  );
}
