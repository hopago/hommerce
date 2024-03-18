import Image from "next/image";
import Link from "next/link";

import { cache } from "react";

import styles from "./book-info.module.css";

import { HttpError } from "@/app/fetcher/error";

import {
  IDetailsNoContent,
  getBookDetails as handleGetBookDetails,
} from "@/app/services/getBookDetails";

import Button from "../../../_components/Button";
import BookDetailsInfo from "./BookDetailsInfo";

export const preload = (bookId: string) => {
  void getBookDetails(bookId);
};

export const getBookDetails = cache(async (bookId: string) => {
  try {
    const details = await handleGetBookDetails(bookId);

    return details;
  } catch (err) {
    const error = err as HttpError;
    const status = error.status;

    if (status) {
      switch (status) {
        case 400:
          throw new Error("책 아이디를 받지 못했어요.");
        case 404:
          throw new Error("해당 책 아이디로 세부정보를 찾지 못했습니다.");
        case 500:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
        default:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
      }
    } else {
      throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
    }
  }
});

type BookDetailsProps = {
  bookId: string;
};

const temporaryBookDetails: IDetails = {
  bookId: "mongo_id",
  awards: [
    "미디어 추천도서 > 주요일간지소개도서 > 매일경제 > 2024년 3월 2주 선정",
    "미디어 추천도서 > 주요일간지소개도서 > 조선일보 > 2024년 2월 3주 선정",
  ],
  intro:
    "시장에서 내복을 팔고 있는 억척스런 어머니와 행방불명 상태로 떠돌다 가끔씩 귀가하는 아버지, 조폭의 보스가 인생의 꿈인 남동생을 가족으로 둔 안진진. 어머니와 일란성 쌍둥이인 이모는 부유하지만 지루한 삶에 지쳐 있고, 가난한 어머니는 처리해야 할 불행들이 많아 지루할 틈이 없다. 안진진은 사뭇 다른 어머니와 이모의 삶을 바라보며 모순투성이인 삶을 어떻게 이해해야 하는지 고민하기 시작하는데….",
  contentsList: `
  1 생의 외침
  2 거짓말들
  3 사람이 있는 풍경
  4 슬픈 일몰의 아버지
  5 희미한 사랑의 그림자
  6 오래전 그 십 분의 의미
  7 불행의 과장법
  8 착한 주리
  9 선운사 도솔암 가는 길에
  10 사랑에 관한 세 가지 메모
  11 사랑에 관한 네 번째 메모
  12 참을 수 없는 너무나 참을 수 없는
  13 헤어진 다음날
  14 크리스마스 선물
  15 씁쓸하고도 달콤한
  16 편지
  17 모순
  `,
  bookInside: `
  * 내 인생의 볼륨이 이토록이나 빈약하다는 사실에 대해 나는 어쩔 수 없이 절망한다. 솔직히 말해서 내가 요즘 들어 가장 많이 우울해하는 것은 내 인생에 양감(量感)이 없다는 것이다. 내 삶의 부피는 너무 얇다. 겨자씨 한 알 심을 만한 깊이도 없다. 이렇게 살아도 되는 것일까.

  * 아버지의 삶은 아버지의 것이고 어머니의 삶은 어머니의 것이다. 나는 한 번도 어머니에게 왜 이렇게 사느냐고 묻지 않았다. 그것은 아무리 어머니라 해도 예의에 벗어나는 질문임에 틀림없으니까.
  `,
  bookPublisherReview: `인생은 탐구하면서 살아가는 것이 아니라, 살아가면서 탐구하는 것이다.
  실수는 되풀이된다. 그것이 인생이다……`,
};

export default async function BookDetails({ bookId }: BookDetailsProps) {
  // const details = await getBookDetails(bookId);

  // if (isNoContent(details)) return <NoContent />;

  return <BookDetailsInfo details={temporaryBookDetails} />;
}

function NoContent() {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfoWrap}>
        <div className={styles.bookInfoHeader}>
          <div className={styles.headerTitle}>
            <div className={styles.fill} />
            <h1>도서 상세정보</h1>
          </div>
        </div>
        <div className={styles.noContent}>
          <Image
            src="/img_no-results.png"
            width={320}
            height={320}
            alt="no-results"
          />
          <p>상세정보가 아직 작성되지 않았습니다.</p>
          <Link href="/books" className={styles.link}>
            <Button text="작성하러 가기" type="button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function isNoContent(obj: any): obj is IDetailsNoContent {
  return "code" in obj && typeof obj.code === "number";
}
