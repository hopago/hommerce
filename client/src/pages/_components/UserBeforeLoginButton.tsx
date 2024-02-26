import { useNavigate } from "react-router-dom";

import { MoreVertSvg, ProfileSvg } from "./constants/Icons";

export default function UserBeforeLoginButton() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <button className="home-nav__user__session__button" onClick={onClick}>
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
