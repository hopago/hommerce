import { useLayoutEffect, useState } from "react";

export default function NewsLetter() {
  const infoLetters = [
    "읽는 사람의 카탈로그, 독서 다짐을 남겨보세요",
    "책상 위 든든한 학습용품, 호머스에서 지원 해드립니다",
    "잠에서 깨어난 도시, 폼페이 특별강연",
  ];

  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    let infoLetterInterval = setInterval(function () {
      if (index === infoLetters.length - 1) {
        setIndex(0);
        return;
      }

      setIndex((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(infoLetterInterval);
    };
  }, [index]);

  return (
    <div className="news-letter">
      <span>{infoLetters[index]}</span>
    </div>
  );
}
