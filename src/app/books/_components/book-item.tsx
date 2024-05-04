import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TBooksData } from "@/types/BooksData";
import Image from "next/image";

interface BookProps {
  book: TBooksData;
}

export const BookItem = ({ book }: BookProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-2 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="flex flex-col space-y-1 p-6">
        <Popover>
          <PopoverTrigger>
            <h3 className="line-clamp-1 text-center text-xl font-bold tracking-tight">
              {book.name}
            </h3>
          </PopoverTrigger>
          <PopoverContent>
            <a>{book.name}</a>
          </PopoverContent>
        </Popover>
      </div>
      <div className="h-max-[150px] flex h-full items-center justify-center rounded-md p-5">
        <Image
          src={book.icon[0]}
          width={200}
          height={200}
          className="max-h-[100px] max-w-[130px] rounded-md bg-cover bg-center"
          style={{ objectFit: "contain" }}
          alt={book.name}
        />
      </div>
    </div>
  );
};

export default BookItem;
