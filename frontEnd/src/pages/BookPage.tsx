import { useParams } from "react-router-dom";
import { useBook } from "../hooks/useBooks";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BookTitleComponent from "../components/bookComponents/bookTitleComponent";
import BookInfoComponent from "../components/bookComponents/bookInfoComponent";
import TabSection from "../components/bookComponents/tabSectionComponent";
import TabContent from "../components/bookComponents/tabContentComponent";
import SocialMediaIcons from "../components/bookComponents/socialMediaIcons";
import SubscribeFormComponent from "../components/subscribeForm";
import SlideMenu from "../components/bookComponents/slideMenu";
import type { TTab } from "../types/tab.types.type";

export default function BookPage() {
  const { id } = useParams();
  const { data: response, isLoading } = useBook(Number(id));
  const location = useLocation();
  const [tab, setTab] = useState<TTab>("Description");

  const previousPage = location.state?.from ?? "/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <BookTitleComponent
        title={response!.book.title}
        prevent_page={previousPage}
      />
      <BookInfoComponent
        imgUrl={response!.book.picture_url}
        rating={response!.book.rating}
        cost={response!.book.cost}
        authors={response!.book.authors.map((author) => author.name).join(", ")}
        format={response!.book.format}
        language={response!.book.language}
        publisher={response!.book.publisher}
        tags={response!.book.tags.map((tag) => tag.tag).join(" ")}
      />
      <TabSection tab={tab} setTab={setTab} />
      <TabContent
        tab={tab}
        authors={response!.book.authors}
        description={response!.book.description}
        reviews={response!.book.reviews}
        bookId={Number(id)}
      />
      <SocialMediaIcons />
      <SubscribeFormComponent />
      <SlideMenu similarBooks={response!.similar} />
    </>
  );
}
