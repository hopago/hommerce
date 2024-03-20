import CardHeaderIcon from "../constants/card-header-icon";

import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";

import styles from "./book-info.module.css";

type BookInfoDetailsCard = {
  title: string | "images";
  value: string | string[];
};

export type OptionalTitle =
  | "discount"
  | "eBookPrice"
  | "unit"
  | "comment"
  | "sellType";

type CardHeaderProps = {
  title: OptionalTitle;
};

const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <div className={styles.cardWrapHeader}>
      <h3>{translateFieldTitleToKor(title)}</h3>
      <CardHeaderIcon title={title} />
    </div>
  );
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
  return (
    <div className={styles.card}>
      <div className={styles.cardWrap}>
        <CardHeader title={title as OptionalTitle} />
        <CardContent value={value} />
      </div>
    </div>
  );
}
