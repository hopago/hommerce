import styles from "./update-user-form.module.css";

import { useQuery } from "@tanstack/react-query";
import { fetchUserBySearchTerm } from "../../../../services/fetchUser";

import { usePasswordForm } from "../hooks/use-password-form";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { daysToMs } from "../../../../utils/daysToMs";

import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";

import { USER_DETAIL_LABEL } from "../../../../constants/classNames";

import { toast } from "sonner";
import Button from "../../../../_components/Button";

import { QueryKeys } from "@/app/lib/getQueryClient";

export default function ChangePasswordForm() {
  const username = getUsernameByPath();

  const { data } = useQuery({
    queryKey: [QueryKeys.USER, username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled: !!username,
  });
  if (!data) return null;
  const user = data[0];

  const { password, onChangePassword, errMsg, onSubmit, isPending } =
    usePasswordForm({
      userId: user.id,
      onSuccess: () => {
        toast.success("비밀번호가 성공적으로 변경됐어요.");
      },
      onError: (errMsg: string) => {
        toast.error(errMsg);
      },
    });

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <Label text="비밀번호" className={USER_DETAIL_LABEL} />
      <Input
        type="password"
        placeholder="비밀번호 변경하기"
        value={password}
        onChange={onChangePassword}
      />
      <Button
        type="submit"
        text="변경하기"
        disabled={isPending}
        ariaLabel="변경하기"
      />
    </form>
  );
}
