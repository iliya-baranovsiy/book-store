import { useAuth } from "../../context/authContext";
import type { TReview } from "../../types/book.types";
import ReviewDetail from "./reviewDetail";
import ReviewForm from "./reviewForm";

export default function ReviewsTab({
  reviews,
  bookId,
}: {
  reviews: TReview[];
  bookId: number;
}) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="lg:w-8/12 lg:mx-auto md:mx-[5.2%] mx-[7.8%]">
      <h2 className="text-[36px] font-head text-black mb-6">Reviews</h2>
      {isAuthenticated ? (
        <ReviewForm bookId={bookId}/>
      ) : (
        ""
      )}
      {reviews.length > 0 ? (
        <div className="flex flex-col gap-8">
          {reviews.map((rev) => (
            <ReviewDetail
              text={rev.review}
              reviewer={rev.reviewer.name}
              rating={rev.rating}
            />
          ))}
        </div>
      ) : (
        <div>Reviews isnt exists</div>
      )}
    </div>
  );
}
