import NextIcon from "./../../assets/icons/right.png";
import PrevIcon from "./../../assets/icons/left.png";
import type { TBook } from "../../types/book.types";
import { useState, useEffect } from "react";
import BookComponent from "../bookComponent";

export default function SlideMenu({ similarBooks }: { similarBooks: TBook[] }) {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setSlides(3);
      } else if (window.innerWidth >= 768) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(similarBooks.length - slides, 0);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [maxIndex, index]);


  return (
    <div className="mx-[7.8%] lg:w-8/12 lg:mx-auto md:mx-[5.2%] mb-14 md:mb-18">
      
      <div className="flex justify-between mb-9 md:mb-12">
        <h3 className="font-head font-normal text-[40px] leading-16">
          Similar Books
        </h3>

        <div className="flex items-center gap-4">
          <img
            src={PrevIcon}
            alt="prev"
            onClick={prevSlide}
            className="cursor-pointer"
          />

          <img
            src={NextIcon}
            alt="next"
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </div>
      </div>


      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(-${index * (100 / slides)}% - ${
              index * 32 / slides
            }px))`,
          }}
        >
          {similarBooks.map((book) => (
            <div
              key={book.id}
              className="
                shrink-0 
                w-full
                md:w-[calc((100%-2rem)/2)]
                lg:w-[calc((100%-4rem)/3)]
              "
            >
              <BookComponent
                title={book.title}
                imgUrl={book.picture_url}
                author={book.author}
                publisher={book.publisher}
                cost={book.cost}
                rating={book.rating}
                id={book.id}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}