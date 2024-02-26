import { MdCheck } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import celebrate from "../../../assets/ico_celebrate.png";

import ReuseButton from "../../../_components/ReuseButton";
import Logo from "../../_components/Logo";
import ShortcutFooter from "../../../_components/ShortcutFooter";

export default function SigninSuccessIndex() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <div className="join-success">
      <header>
        <Logo />
      </header>
      <main>
        <section>
          <div className="process-complete">
            <span>회원가입</span>
            <div className="icon-wrap">
              <MdCheck />
            </div>
          </div>
          <div className="navigate">
            <div className="left">
              <div className="img-wrap">
                <img src={celebrate} alt="join-success-img" />
              </div>
            </div>
            <div className="right">
              <span>회원 가입에 성공했습니다.</span>
              <ReuseButton
                text="로그인"
                style="default"
                size="md"
                onClick={onClick}
              />
            </div>
          </div>
        </section>
      </main>
      <ShortcutFooter />
    </div>
  );
}
