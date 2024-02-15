import heart from "../assets/ico_heart.png";

export default function WishButton() {
  const onClick = () => {};

  return (
    <button className="wish-btn" onClick={onClick}>
      <div className="img-wrap">
        <img src={heart} alt="wish-icon" />
      </div>
    </button>
  );
}
