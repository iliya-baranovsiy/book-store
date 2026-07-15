import BookPictureComponent from "./bookPicture";
import BookDetailsComponent from "./bookDetailsComponent";

export default function BookInfoComponent({
  imgUrl,
  cost,
  rating,
  authors,
  format,
  language,
  publisher,
  tags
}: {
  imgUrl: string;
  cost: number;
  rating: number;
  authors: string;
  format:string;
  language:string;
  publisher: string;
  tags: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-8/12 lg:mx-auto justify-between lg:gap-0 items-center lg:items-stretch">
      <BookPictureComponent imgUrl={imgUrl} />
      <BookDetailsComponent
        cost={cost}
        rating={rating}
        authors={authors}
        format={format}
        language={language}
        publisher={publisher}
        tags={tags}
      />
      
    </div>
  );
}
