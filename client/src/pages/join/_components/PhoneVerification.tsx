import PhoneButton from "./PhoneButton";

import phone from "../../../assets/ico_phone.png";
import iPin from "../../../assets/ico_ipin.png";

type PhoneVerificationProps = {
  setCurrForm: React.Dispatch<React.SetStateAction<0 | 1>>;
};

export default function PhoneVerification({
  setCurrForm,
}: PhoneVerificationProps) {
  const onClick = () => {
    setCurrForm(1);
  };

  return (
    <div className="register-page__phone-verification">
      <h2>본인인증</h2>
      <div className="register-page__phone-verification__btns">
        <PhoneButton
          type="button"
          text="휴대폰 본인인증"
          img={phone}
          onClick={onClick}
        />
        <PhoneButton
          type="button"
          text="아이핀 본인인증"
          img={iPin}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
