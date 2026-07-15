import { useState, useEffect } from "react";
import SearchIcon from "./../assets/icons/Search.png";
import { getSearchBooks } from "../services/bookService";

export default function SearchBar({ hidden }: { hidden: boolean }) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (!search.trim()) return;

    const timer = setTimeout(async () => {
      const books = await getSearchBooks(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div
      className={`${hidden ? "hidden" : ""} lg:ml-[13.48%] lg:mr-[9.38%] lg:w-[48.39%] h-14 border-2 border-grey 
    flex flex-row items-center pl-5 w-full mb-78 lg:mb-0`}
    >
      <form className="w-[88.9%] h-full border-0">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-full outline-0 appearance-none"
        />
      </form>
      <img src={SearchIcon} alt="search" className="w-6 h-6" />
    </div>
  );
}
