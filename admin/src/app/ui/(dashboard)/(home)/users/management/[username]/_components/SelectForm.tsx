import { useUserGradeMutation } from "../services/use-user-grade-mutation";
import { useUserStatusMutation } from "../services/use-user-status-mutation";
import SelectInput from "./SelectInput";

type SelectFormProps = {
  inputName: "grade" | "username" | "email" | "status";
  value: UserGrade | UserStatus;
};

const userGrade: UserGrade[] = ["일반회원", "VIP"];

const userStatus: UserStatus[] = ["활성화", "휴면"];

export default function SelectForm({ inputName, value }: SelectFormProps) {
  const { mutateUserGrade, isPending: isGradePending } = useUserGradeMutation();

  const { mutateUserStatus, isPending: isStatusPending } =
    useUserStatusMutation();

  if (inputName === "grade") {
    return (
      <SelectInput
        items={userGrade}
        onClickItem={mutateUserGrade}
        isPending={isGradePending}
        value={value}
      />
    );
  }

  if (inputName === "status") {
    return (
      <SelectInput
        items={userStatus}
        onClickItem={mutateUserStatus}
        isPending={isStatusPending}
        value={value}
      />
    );
  }

  return null;
}
