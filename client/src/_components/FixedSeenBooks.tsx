import { books as seenBooks } from "../recoil/books";

import SeenBookList from "../@modal/SeenBookList";

import { seenModalState } from "../recoil/seen-modal";
import { useRecoilState } from "recoil";

export default function FixedSeenBooks() {
  /* Book ID Local 저장 후 가져온 뒤 lest-seen-item img, seen-items length 띄우기 */

  const length = seenBooks.length;
  const lastItemImg = seenBooks[seenBooks.length - 1].img;

  const [show, setShow] = useRecoilState(seenModalState);

  const onClick = () => {
    setShow(true);
  };

  return (
    <>
      <div className="fixed-seen-books" onClick={onClick}>
        <div className="fixed-seen-books__wrap">
          <div className="img-wrap">
            <img src={lastItemImg} alt="last-seen-book" />
          </div>
          <span className="text-wrap">{length}</span>
        </div>
      </div>
      {show && <SeenBookList show={show} books={seenBooks} />}
    </>
  );
}
