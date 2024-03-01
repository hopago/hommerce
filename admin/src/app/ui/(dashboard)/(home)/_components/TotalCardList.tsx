import TotalCardItem from "./TotalCardItem";

import styles from "./total-card.module.css";

type CardDataType = {
  type: "users" | "products" | "service";
  length: number;
  improvePert: number;
}[];

export default function TotalCardList() {
  const temporaryData: CardDataType = [
    {
      type: "users",
      length: 12345,
      improvePert: 12,
    },
    {
      type: "products",
      length: 24123,
      improvePert: 34,
    },
    {
      type: "service",
      length: 13123,
      improvePert: 56,
    },
  ];

  return (
    <div className={styles.container}>
      {temporaryData.map((data) => (
        <TotalCardItem
          key={data.type}
          type={data.type}
          length={data.length}
          improvePert={data.improvePert}
        />
      ))}
    </div>
  );
}
