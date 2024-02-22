import { useNavigate } from "react-router-dom";

import Button from "./Button";

export default function Register() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/join");
  };

  return (
    <Button
      className="register"
      text="회원가입"
      type="button"
      onClick={onClick}
    />
  );
}
