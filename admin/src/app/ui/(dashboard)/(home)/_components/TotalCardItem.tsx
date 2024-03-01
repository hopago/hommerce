import {
  MdDesignServices,
  MdOutlineSupervisorAccount,
  MdShoppingBag,
} from "react-icons/md";

import styles from "./total-card-item.module.css";

type TotalCardItemProps = {
  type: "users" | "products" | "service";
  length: number;
  improvePert: number;
};

type CardTitleProps = {
  title: string;
};

type CardValueProps = {
  value: string;
};

type CardCompareProps = {
  isPositive: boolean;
  value: number;
};

export default function TotalCardItem({
  type,
  length,
  improvePert,
}: TotalCardItemProps) {
  const isPositive = improvePert > 0;

  if (type === "users") {
    return (
      <div className={styles.container}>
        <MdOutlineSupervisorAccount size={24} />
        <div className={styles.texts}>
          <CardTitle title="총 회원수" />
          <CardValue value={length.toLocaleString()} />
          <CardCompare isPositive={isPositive} value={improvePert} />
        </div>
      </div>
    );
  }

  if (type === "products") {
    return (
      <div className={styles.container}>
        <MdShoppingBag size={24} />
        <div className={styles.texts}>
          <CardTitle title="총 상품수" />
          <CardValue value={length.toLocaleString()} />
          <CardCompare isPositive={isPositive} value={improvePert} />
        </div>
      </div>
    );
  }

  if (type === "service") {
    return (
      <div className={styles.container}>
        <MdDesignServices size={24} />
        <div className={styles.texts}>
          <CardTitle title="총 문의량" />
          <CardValue value={length.toLocaleString()} />
          <CardCompare isPositive={isPositive} value={improvePert} />
        </div>
      </div>
    );
  }
}

const CardTitle = ({ title }: CardTitleProps) => <p>{title}</p>;

const CardValue = ({ value }: CardValueProps) => <p>{value}</p>;

const CardCompare = ({ isPositive, value }: CardCompareProps) => (
  <p>
    <span>전월 대비</span>
    <span className={isPositive ? styles.positive : styles.negative}>
      {value}%
    </span>
    {isPositive ? <span>증가했습니다.</span> : <span>감소했습니다.</span>}
  </p>
);
