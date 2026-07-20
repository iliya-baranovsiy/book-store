import type { TTab } from "../../types/tab.types.type";
import type { TAuthor } from "../../types/book.types";
import type { TReview } from "../../types/book.types";
import ReviewsTab from "./reviewComponent";

export default function TabContent({
  tab,
  description,
  authors,
  reviews,
  bookId,
}: {
  tab: TTab;
  description: string;
  authors: TAuthor[];
  reviews: TReview[];
  bookId: number;
}) {
  if (tab === "Description") {
    return (
      <div className="lg:w-8/12 lg:mx-auto md:mx-[5.2%] mx-[7.8%] whitespace-pre-line">
        {description}
      </div>
    );
  } else if (tab === "Author") {
    return (
      <div className="lg:w-8/12 lg:mx-auto md:mx-[5.2%] mx-[7.8%] flex flex-col gap-6">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col gap-3">
            <h3 className="text-[24px] font-head font-normal leading-16 tracking-normal">
              {author.name}
            </h3>
            <span>{author.biography}</span>
          </div>
        ))}
      </div>
    );
  } else {
    return <ReviewsTab reviews={reviews} bookId={bookId}/>;
  }
}
