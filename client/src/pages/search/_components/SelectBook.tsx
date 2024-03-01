import { useSetRecoilState } from "recoil";
import { selectedBookState } from "../../../recoil/selected-book";

import { MdCheck } from "react-icons/md";

type SelectBookProps = {
  book: TBook;
};

export default function SelectBook({ book }: SelectBookProps) {
  const setSelectedBook = useSetRecoilState(selectedBookState);

  const handleSelectBook = () => {
    setSelectedBook((selectedBook) => {
      const currSelected = selectedBook;

      const findIndex = currSelected.findIndex((b) => b.id === book.id);

      if (findIndex) {
        const updatedList = currSelected.filter((b) => b.id !== book.id);
        return updatedList;
      } else {
        return [...currSelected, book];
      }
    });
  };

  return (
    <button onClick={handleSelectBook}>
      <span className="ico-wrap">
        <MdCheck className="icon" />
      </span>
    </button>
  );
}
