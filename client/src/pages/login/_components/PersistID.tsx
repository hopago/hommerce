import { MdCheck } from "react-icons/md";
import { cn } from "../../../lib/utils";

type PersistIdProps = {
  onClick: () => void;
  isPersist: boolean;
};

export default function PersistID({ onClick, isPersist }: PersistIdProps) {
  return (
    <div className="login-id-persist">
      <div className={cn("left", isPersist && "active")}>
        <div className="icon-wrap" onClick={onClick}>
          <MdCheck className="icon" />
        </div>
        <span>아이디 저장</span>
      </div>
      <div className="right">
        <span>아이디/비밀번호 찾기</span>
      </div>
    </div>
  );
}
