import { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import IconsSet from "./iconsSet";
import BarComponent from "./barComponent";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const [hidden, setHidden] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setHidden(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative h-26 justify-between flex flex-row items-center mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%]">
      <h2 className="font-head font-normal text-[40px] leading-16 tracking-normal whitespace-nowrap md:mr-[62.5%] lg:mr-0 mr-[13.6%]">
        BookStore
      </h2>
      <SearchBar hidden={hidden} />
      <IconsSet isOpen={isOpen} setOpen={setOpen} />
      <BarComponent position="bottom" />
    </header>
  );
}
