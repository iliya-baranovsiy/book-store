import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "./../assets/icons/Search.png";
import { getSearchBooks } from "../services/bookService";
import { useSearchParams } from "react-router-dom";
import type { TShortBookResponse } from "../types/bookResponses.types";
import SearchResult from "./searchComponent";


export default function SearchBar({ hidden, forMobileSearch=false }: { hidden: boolean,forMobileSearch?:boolean }) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState<TShortBookResponse>();
  const [, setSearchParams] = useSearchParams()
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!search.trim()) return;

  setSearchParams({
    page: "1",
    q: search,
  });

  setBooks(undefined);
  setSearch("")
  }
  const main_styles = "h-14 border-2 border-grey flex flex-row items-center pl-5"
  const styles_default = `${hidden ? "hidden" : ""} lg:ml-[13.48%] lg:mr-[9.38%] lg:w-[48.39%] mb-78 lg:mb-0 relative w-full`
  const mobile_styles = "lg:hidden mb-0 mt-14 md:mt-16 mx-[7.8%] md:mx-[5.2%]"
    
  
  return (
    <>
      <div
        className={`${forMobileSearch? mobile_styles: styles_default} ${main_styles}`} ref={searchRef}
      >
        <form className="w-[88.9%] h-full border-0" onSubmit={handleSubmit}>
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
