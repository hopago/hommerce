import UserButton from "./UserButton";
import { GlobalSvg } from "./constants/Icons";

export default function UserSection() {
  return (
    <div className="home-nav__user">
      <div className="home-nav__user__marketing">
        <span>당신의 지식과 함께하고 싶습니다</span>
      </div>
      <div className="home-nav__user__icon">
        <div className="home-nav__user__icon__wrapper">
          <GlobalSvg />
        </div>
      </div>
      <div className="home-nav__user__session">
        <UserButton />
      </div>
    </div>
  );
}
