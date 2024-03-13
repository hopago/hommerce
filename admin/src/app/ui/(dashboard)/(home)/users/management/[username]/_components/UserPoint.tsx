import { useQuery } from "@tanstack/react-query";
import { fetchUserPoint } from "../services/fetchUserPoint";
import { QueryKeys } from "@/app/lib/getQueryClient";

import { daysToMs } from "../../../../utils/daysToMs";

import { useHandleError } from "../hooks/use-handle-error";

import styles from "./user-point-logs.module.css";

import { FaUser } from "react-icons/fa";

type UserPointProps = {
  userId: string;
};

export default function UserPoint({ userId }: UserPointProps) {
  const { data, error, isError } = useQuery<number>({
    queryKey: [QueryKeys.USER_POINT, userId],
    queryFn: () => fetchUserPoint(userId),
    staleTime: daysToMs(3),
    gcTime: daysToMs(5),
    enabled: !!userId,
  });

  useHandleError({ error, isError, fieldName: "포인트" });

  return (
    <div className={styles.userPoint}>
      <div className={styles.userPointWrap}>
        <FaUser size={34} className={styles.userIco} />
        <div className={styles.userPointTexts}>
          <h1>통합 포인트</h1>
          <span>{Number(data) ?? 0}&nbsp;P</span>
        </div>
      </div>
    </div>
  );
}
