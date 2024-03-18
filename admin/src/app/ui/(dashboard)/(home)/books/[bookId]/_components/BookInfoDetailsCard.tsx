import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";

import BookInfoDetailsImages from "./BookInfoDetailsImages";

import styles from "./book-info.module.css";

type BookInfoDetailsCard = {
  title: string | "images";
  value: string | string[];
};

const CardContent = ({ value }: { value: string | string[] }) => {
  return (
    <>
      {typeof value === "string" ? (
        <span>{value}</span>
      ) : (
        value.map((v, i) => {
          if (i === value.length - 1) {
            return <span key={v}>{v}</span>;
          } else {
            return <span key={v}>{v},</span>;
          }
        })
      )}
    </>
  );
};

export default function BookInfoDetailsCard({
  title,
  value,
}: BookInfoDetailsCard) {
  if (title === "images") {
    return <BookInfoDetailsImages title={title} images={value as string[]} />;
  }

  return (
    <div className={styles.detailsCardContainer}>
      <h3>부가 정보</h3>
      <div className={styles.detailsCardWrap}>
        <div className={styles.card}>
          <div className={styles.cardWrap}>
            <h3>{translateFieldTitleToKor(title)}</h3>{" "}
            {/* TODO: 각 필드마다 적절한 아이콘 */}
            <CardContent value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}
