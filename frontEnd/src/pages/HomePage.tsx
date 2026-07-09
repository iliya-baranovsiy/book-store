import { useSearchParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";

export default function HomePage() {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page") ?? 1);

  const { data: response, isLoading } = useBooks(page);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div>
      {response?.items.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}
