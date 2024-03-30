import MainSection from "@/components/MainSection";
import BookBox from "./_components/bookBox";
import { portfolioBooks } from "@/constants/books";

const MyBooks = () => {
  return (
    <MainSection className="text-2xl">
      <div className="mb-7 flex flex-col items-center justify-center gap-5 font-bold italic">
        <h1>Livros</h1>
        <p className="text-base">
          livros que estão me ajudando a evoluir na carreira
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioBooks.map((book) => (
          <BookBox key={book.id} book={book} />
        ))}
      </div>
    </MainSection>
  );
};

export default MyBooks;
