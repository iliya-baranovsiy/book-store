import { useState, useRef } from "react";
import FormButton from "../authCompoents/buttonComponent";
import StarRting from "./starRting";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { addReview } from "../../services/bookService";
import { useQueryClient } from "@tanstack/react-query";

export default function ReviewForm({
  bookId,
}: {
  bookId: number;
}) {
  const { isAuthenticated } = useAuth();
  const [rating, setRating] = useState(0);
  const loacation = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isAuthenticated) {
      loacation("/");
      return;
    }
    const responseCode = await addReview(
      bookId,
      inputRef.current?.value || "",
      rating,
    );

    if (responseCode === 201) {
      formRef.current?.reset();
      queryClient.invalidateQueries({
        queryKey: ["book", bookId],
      })
      setRating(0)
      return;
    }
  }

  return (
    <div className="mb-8">
      <h5 className="text-[26px] font-head text-black mb-2">
        Leave your review
      </h5>
      <div className="w-full">
        <form
          className="h-full w-full lg:w-1/2 flex flex-col  gap-4"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            placeholder="Leave your review"
            className="border border-grey outline-0 appearance-none h-14 pl-4 w-full"
            required={true}
            ref={inputRef}
          ></input>
          <StarRting onChange={setRating} value={rating} />
          <FormButton text="Leave"/>
        </form>
      </div>
    </div>
  );
}
