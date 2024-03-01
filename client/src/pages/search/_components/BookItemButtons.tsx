import { useEffect } from "react";

import FavorButton from "./FavorButton";
import ReuseButton from "../../../_components/ReuseButton";

type BookItemButtonsProps = {
  bookId: number;
};

export default function BookItemButtons({ bookId }: BookItemButtonsProps) {
  const temporaryFavorLength = 0;

  useEffect(() => {
    // TODO: getFavorLengthByBookId
  }, [bookId]);

  return (
    <div className="book-item-buttons">
      <FavorButton favorLength={temporaryFavorLength} />
      <ReuseButton text="장바구니" size="md" style="default" />
      <ReuseButton text="바로구매" size="md" style="purple" />
    </div>
  );
}
