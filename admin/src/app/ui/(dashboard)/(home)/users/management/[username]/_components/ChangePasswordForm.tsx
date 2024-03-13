import styles from "./update-user-form.module.css";

import { useQuery } from "@tanstack/react-query";
import { fetchUserBySearchTerm } from "../../../../services/fetchUser";

import { usePasswordForm } from "../hooks/use-password-form";

import { getUsernameByPath } from "../utils/getUsernameByPath";
import { daysToMs } from "../../../../utils/daysToMs";

import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";
import Button from "../../../../_components/Button";

import { toast } from "sonner";

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

  const { password, onChangePassword, onSubmit, isPending } = usePasswordForm({
    userId: user.id,
    onSuccess: () => {
      toast.success("비밀번호가 성공적으로 변경됐어요.");
    },
    onError: (errMsg: string) => {
      toast.error(errMsg);
    },
  });

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputWrap}>
        <Label text="비밀번호" />
        <Input
          type="password"
          placeholder="비밀번호 변경하기"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button
          type="submit"
          text="변경하기"
          disabled={isPending}
          ariaLabel="변경하기"
        />
      </div>
    </form>
  );
}
