import { UpdateUserInputType } from "../_components/UpdateUserForm";

const updateUserInputType: Record<UpdateUserInputType, string> = {
  email: "이메일",
  grade: "회원등급",
  password: "비밀번호",
  status: "활동상태",
  username: "유저명",
};

export function changeTitleToKor(
  type: UpdateUserInputType
): string | undefined {
  return updateUserInputType[type];
}
