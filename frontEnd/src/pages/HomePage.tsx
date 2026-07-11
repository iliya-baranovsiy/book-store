import { useSearchParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import ContainerTtitle from "../components/containerTtitle";
import BooksContainer from "../components/booksContainer";

export default function HomePage() {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);

  const { data: response, isLoading } = useBooks(page);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <ContainerTtitle />
      <BooksContainer data={response!}/>
    </>
  );
}
