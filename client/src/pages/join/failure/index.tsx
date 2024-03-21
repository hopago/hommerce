import { MdError } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import error from "../../../assets/img_internal-error.png";

import ReuseButton from "../../../_components/ReuseButton";
import Logo from "../../_components/Logo";
import ShortcutFooter from "../../../_components/ShortcutFooter";

import { cn } from "../../../lib/utils";

export default function SignoutFailureIndex() {
  const navigate = useNavigate();

  const navigateToSingIn = () => {
    navigate("/join");
  };

  const navigateToHome = () => {
    navigate("/");
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
            <div className="icon-wrap" style={{ backgroundColor: "#F92027" }}>
              <MdError />
            </div>
          </div>
          <div className="navigate">
            <div className="left">
              <div className="img-wrap">
                <img src={error} alt="join-failure-img" />
              </div>
            </div>
            <div className={cn("right", "failure")}>
              <span>회원 가입에 실패했습니다.</span>
              <p>일시적 서버 오류이니 잠시 후 다시 시도해주세요.</p>
              <ReuseButton
                text="홈으로 이동"
                style="default"
                size="md"
                onClick={navigateToHome}
              />
              <ReuseButton
                text="다시 시도"
                style="default"
                size="md"
                onClick={navigateToSingIn}
              />
            </div>
          </div>
        </section>
      </main>
      <ShortcutFooter />
    </div>
  );
}
