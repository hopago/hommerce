import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { selectedBookState } from "../../../recoil/selected-book";

import { MdCheck } from "react-icons/md";

import { cn } from "../../../lib/utils";

type SelectBookProps = {
  book: IBook;
};

export default function SelectBook({ book }: SelectBookProps) {
  const [selectedBooks, setSelectedBooks] = useRecoilState(selectedBookState);

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectBook = () => {
    const filteredSelectedBook = selectedBooks.filter(
      (b) => b._id !== book._id
    );

    isSelected
      ? setSelectedBooks(filteredSelectedBook)
      : setSelectedBooks([...selectedBooks, book]);
  };

  useEffect(() => {
    const checkExist = selectedBooks.some((b) => b._id === book._id);

    setIsSelected(checkExist);
  }, [selectedBooks.length, book._id]);

  return (
    <button
      className={cn("select-button", isSelected && "active")}
      onClick={handleSelectBook}
    >
      <span className="ico-wrap">
        <MdCheck className="icon" />
      </span>
    </button>
  );
}
