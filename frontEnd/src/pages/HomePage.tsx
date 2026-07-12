import { useSearchParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";
import { useEffect } from "react";
import ContainerTtitle from "../components/containerTtitle";
import BooksContainer from "../components/booksContainer";
import Pagination from "../components/pagination/paginationComponent";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);

  const { data: response, isLoading } = useBooks(page);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [page]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <ContainerTtitle />
      <BooksContainer data={response!} />
      <Pagination page={page} totalPages={response!.pages} setPage={(page) => setSearchParams({page: String(page)})}/>
    </>
  );
}
