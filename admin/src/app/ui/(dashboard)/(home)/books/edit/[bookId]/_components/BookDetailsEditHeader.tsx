import MethodBadge from "../../../../_components/MethodBadge";

import styles from "./book-detail-edit.module.css";

type BookDetailsEditHeaderProps = {
  isExist: boolean;
};

export default function BookDetailsEditHeader({
  isExist,
}: BookDetailsEditHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrap}>
        <h3>도서 상세 정보 {isExist ? "수정" : "게시"}</h3>
        <MethodBadge method={isExist ? "PATCH" : "POST"} />
      </div>
    </div>
  );
}
