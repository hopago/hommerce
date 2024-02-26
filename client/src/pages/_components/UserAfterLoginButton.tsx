import { useNavigate } from "react-router-dom";

import { MoreVertSvg } from "./constants/Icons";

import { useUser } from "@clerk/clerk-react";

export default function UserAfterLoginButton() {
  const { user } = useUser();

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/user/main");
  };

  return (
    <button className="home-nav__user__session__button" onClick={onClick}>
      <div className="home-nav__user__session__button__wrapper">
        <div className="home-nav__user__session__button__wrapper__icon">
          <MoreVertSvg />
        </div>
        <div className="home-nav__user__session__button__wrapper__icon">
          <img src={user?.imageUrl} alt="user-image" />
        </div>
      </div>
    </button>
  );
}
