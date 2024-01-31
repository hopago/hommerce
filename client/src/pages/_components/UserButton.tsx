import { MoreVertSvg, ProfileSvg } from "./constants/Icons";

export default function UserButton() {
  return (
    <button className="home-nav__user__session__button">
      <div className="home-nav__user__session__button__wrapper">
        <div className="home-nav__user__session__button__wrapper__icon">
          <MoreVertSvg />
        </div>
        <div className="home-nav__user__session__button__wrapper__icon">
          <ProfileSvg />
        </div>
      </div>
    </button>
  );
}
