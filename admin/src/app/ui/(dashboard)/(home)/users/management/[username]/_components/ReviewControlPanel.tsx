import styles from "./review-log-list.module.css";

type ReviewControlPanelProps = {
  dataLength: number;
};

// TODO: 타이틀 -> 선택된 아이템이 있다면 개수, 일괄 삭제 기능 제공

export default function ReviewControlPanel({
  dataLength,
}: ReviewControlPanelProps) {
  return (
    <h1 className={styles.title}>{dataLength.toLocaleString()}개의 리뷰</h1>
  );
}
