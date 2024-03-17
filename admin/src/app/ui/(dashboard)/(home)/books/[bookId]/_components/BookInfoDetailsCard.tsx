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

const temporaryData = {
  images: [
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788954682152.jpg",
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788954697354.jpg",
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788937460883.jpg",
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791193130261.jpg",
    "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791171251360.jpg",
  ],
  discount: 15,
  ebookPrice: 4000,
  unit: "원",
  comment:
    "시장에서 내복을 팔고 있는 억척스런 어머니와 행방불명 상태로 떠돌다 가끔씩 귀가하는 아버지, 조폭의 보스가 인생의 꿈인 남동생을 가족으로 둔 안진진. 어머니와 일란성 쌍둥이인 이모는 부유하지만 지루한 삶에 지쳐 있고, 가난한 어머니는 처리해야 할 불행들이 많아 지루할 틈이 없다.",
  sellType: ["종이책", "eBook"],
};

export default function BookInfoDetailsCard({
  title,
  value,
}: BookInfoDetailsCard) {
  if (title === "images") {
    return (
      <BookInfoDetailsImages
        title={title}
        images={temporaryData.images as string[]}
      />
    );
  }

  return (
    <div className={styles.detailsCardContainer}>
      <h3>부가 정보</h3>
      <div className={styles.detailsCardWrap}>
        <div className={styles.card}>
          <div className={styles.cardWrap}>
            <h3>{translateFieldTitleToKor(title)}</h3> {/* TODO: 각 필드마다 적절한 아이콘 */}
            <CardContent value={value} />
          </div>
        </div>
      </div>
    </div>
  );
}
