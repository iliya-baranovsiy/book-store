import BookPictureComponent from "./bookPicture";
import BookDetailsComponent from "./bookDetailsComponent";

export default function BookInfoComponent({
  imgUrl,
  cost,
  rating,
  authors,
  format,
  language,
  publisher
}: {
  imgUrl: string;
  cost: number;
  rating: number;
  authors: string;
  format:string;
  language:string;
  publisher: string
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-8/12 items-center lg:mx-auto justify-between gap-9 md:gap-12 lg:gap-0">
      <BookPictureComponent imgUrl={imgUrl} />
      <BookDetailsComponent
        cost={cost}
        rating={rating}
        authors={authors}
        format={format}
        language={language}
        publisher={publisher}
      />
    </div>
  );
}
