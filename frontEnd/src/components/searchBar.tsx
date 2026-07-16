import { useState, useEffect, useRef } from "react";
import SearchIcon from "./../assets/icons/Search.png";
import { getSearchBooks } from "../services/bookService";
import type { TShortBookResponse } from "../types/bookResponses.types";
import SearchResult from "./searchComponent";

export default function SearchBar({ hidden }: { hidden: boolean }) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<TShortBookResponse>();
  useEffect(() => {
    if (!search.trim()) return;

    const timer = setTimeout(async () => {
      const result = await getSearchBooks(search);
      setBooks(result);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);


const searchRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setBooks(undefined);
      setSearch("");
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <>
      <div
        className={`${hidden ? "hidden" : ""} lg:ml-[13.48%] lg:mr-[9.38%] lg:w-[48.39%] h-14 border-2 border-grey 
    flex flex-row items-center pl-5 w-full mb-78 lg:mb-0 relative`} ref={searchRef}
      >
        <form className="w-[88.9%] h-full border-0">
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setBooks(undefined);
              setSearch(e.target.value);
            }}
            className="w-full h-full outline-0 appearance-none"
          />
        </form>
        <img src={SearchIcon} alt="search" className="w-6 h-6" />
        {books && books.items.length > 0 && <SearchResult books={books} closeWindows={() => {setBooks(undefined); setSearch("")}} search={search}/>}
      </div>
      
    </>
  );
}
