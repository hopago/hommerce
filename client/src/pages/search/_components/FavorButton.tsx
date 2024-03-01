import heart from "../../../assets/ico_heart.png";

type FavorButtonProps = {
  favorLength: number;
};

export default function FavorButton({ favorLength }: FavorButtonProps) {
  const onClick = () => {};

  return (
    <button className="favor-btn" onClick={onClick}>
      <div className="img-wrap">
        <img src={heart} alt="heart-icon" />
      </div>
      <span>{favorLength}</span>
    </button>
  );
}
