import { useEffect } from "react";

import FavorButton from "./FavorButton";
import ReuseButton from "../../../_components/ReuseButton";

import { UIType } from "../hooks/use-select-ui";

type BookItemButtonsProps = {
  bookId: string;
  display: UIType;
};

export default function BookItemButtons({
  bookId,
  display,
}: BookItemButtonsProps) {
  const temporaryFavorLength = 0;

  useEffect(() => {
    // TODO: getFavorLengthByBookId
  }, [bookId]);

  const handleAddCart = () => {};

  return (
    <div className="book-item-buttons">
      <FavorButton favorLength={temporaryFavorLength} />
      {display === "flex" && (
        <>
          <ReuseButton
            text="장바구니"
            size="md"
            style="default"
            onClick={handleAddCart}
          />
          <ReuseButton text="바로구매" size="md" style="purple" />
        </>
      )}
    </div>
  );
}
