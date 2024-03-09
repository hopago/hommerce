import { STYLE_NONE_BUTTON } from "../../../../constants/classNames";

import styles from "./update-user-form.module.css";

import { useUserGradeMutation } from "../services/use-user-grade-mutation";

const userGrade: UserGrade[] = ["일반회원", "VIP"];

export default function SelectGradeForm() {
  const { mutateUserGrade, isPending } = useUserGradeMutation();

  const onClick = (grade: UserGrade) => {
    mutateUserGrade(grade);
  };

  return (
    <div className={styles.select}>
      <ol className={styles.selectList}>
        {userGrade.map((grade) => (
          <li key={grade} className={styles.selectItem}>
            <button
              className={STYLE_NONE_BUTTON}
              onClick={() => onClick(grade)}
              disabled={isPending}
            >
              <span>{grade}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
