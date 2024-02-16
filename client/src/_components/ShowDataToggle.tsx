import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

type ShowDataToggleProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShowDataToggle({ show, setShow }: ShowDataToggleProps) {
  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <button className="show-toggle-btn" onClick={onClick}>
      <div className="text">{show ? "접기" : "펼치기"}</div>
      <div className="icon-wrap">
        {show ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
    </button>
  );
}
