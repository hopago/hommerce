import { SignInButton } from "@clerk/clerk-react";

import discord from "../../../assets/svg/discord.svg";
import github from "../../../assets/svg/github.svg";
import google from "../../../assets/svg/google.svg";

export default function SNSLogin() {
  return (
    <div className="sns-login-list">
      <SignInButton>
        <div className="images-wrap">
          <img src={discord} alt="discord-svg" />
          <img src={github} alt="github-svg" />
          <img src={google} alt="google-svg" />
        </div>
      </SignInButton>
      <p>
        개인정보 보호를 위해 공용 PC에서 사용 시 SNS계정의 로그아웃 상태를 꼭
        확인해 주세요.
      </p>
    </div>
  );
}
