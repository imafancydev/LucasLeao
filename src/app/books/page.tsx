import MainSection from "@/components/MainSection";
import BookBox from "./_components/bookBox";
import { portfolioBooks } from "@/constants/books";

const MyBooks = () => {
  return (
    <MainSection className="text-2xl">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {portfolioBooks.map((book) => (
          <BookBox key={book.id} book={book} />
        ))}
      </div>
    </MainSection>
  );
};

export default MyBooks;
