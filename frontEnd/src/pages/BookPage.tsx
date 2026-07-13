import { useParams } from "react-router-dom";
import { useBook } from "../hooks/useBooks";
import { useLocation } from "react-router-dom";
import BookTitleComponent from "../components/bookComponents/bookTitleComponent";
import BookInfoComponent from "../components/bookComponents/bookInfoComponent";

export default function BookPage() {
  const { id } = useParams();
  const { data: response, isLoading } = useBook(Number(id));
  const location = useLocation();

  const previousPage = location.state?.from;

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <BookTitleComponent
        title={response!.book.title}
        prevent_page={previousPage}
      />
      <BookInfoComponent imgUrl={response!.book.picture_url} rating={response!.book.rating} cost={response!.book.cost} authors={response!.book.author} format={response!.book.format} language={response!.book.language} publisher={response!.book.publisher}/>
    </>
  );
}
