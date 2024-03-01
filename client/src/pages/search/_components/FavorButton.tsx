import { MdStar } from "react-icons/md";

type FavorButtonProps = {
  favorLength: number;
};

export default function FavorButton({ favorLength }: FavorButtonProps) {
  const onClick = () => {};

  return (
    <button className="favor-btn" onClick={onClick}>
      <div className="img-wrap">
        <div className="vertical">
          <div className="icon-wrap">
            <MdStar className="icon" />
          </div>
          <span>{favorLength}</span>
        </div>
      </div>
    </button>
  );
}
