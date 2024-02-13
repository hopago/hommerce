import { useSetRecoilState } from "recoil";
import { seenModalState } from "../recoil/seen-modal";
import { MdClose } from "react-icons/md";

export default function Heading() {
  const setShow = useSetRecoilState(seenModalState);

  const onClick = () => {
    setShow(false);
  };

  return (
    <div className="seen-book-list__wrapper__heading">
      <h1>최근 본 컨텐츠</h1>
      <button onClick={onClick}>
        <MdClose />
      </button>
    </div>
  );
}
