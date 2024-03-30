import { TBooksData } from "@/types/BooksData";
import Image from "next/image";

interface BookProps {
  book: TBooksData;
}

export const BookBox = ({ book }: BookProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border p-2 shadow">
      <div className="flex flex-col space-y-1 p-6">
        <h3 className="line-clamp-1 text-center text-xl font-bold italic tracking-tight">
          {book.name}
        </h3>
      </div>
      <div className="h-max-[200px] flex h-full items-center justify-center rounded-md p-6">
        <Image
          data-cursor="block"
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1;--cursor-blur-duration: 1.4s;border-radius: 6px"
          src={book.icon[0]}
          width={200}
          height={200}
          className="max-h-[250px] max-w-[200px] rounded-md bg-center"
          style={{ objectFit: "contain" }}
          alt={book.name}
        />
      </div>
    </div>
  );
};

export default BookBox;
