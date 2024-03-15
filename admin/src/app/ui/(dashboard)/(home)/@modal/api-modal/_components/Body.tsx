import { useBodyInput } from "@/app/store/use-body-input";

import styles from "../api-modal.module.css";

import { useEffect, useMemo } from "react";

type BodyProps = {
  body: {
    value: unknown;
    required: boolean;
  };
};

export default function Body({ body }: BodyProps) {
  const { parsedValue, inputValue, setInputValue } = useBodyInput();

  useEffect(() => {
    const debouncedSet = setTimeout(() => {
      setInputValue(inputValue);
    }, 1000);

    return () => clearTimeout(debouncedSet);
  }, [inputValue]);

  const memoBody = useMemo(() => body, [body]);

  const formattedBody = JSON.stringify(parsedValue ?? memoBody?.value, null, 2);

  return (
    <div className={styles.body}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>요청 본문</span>
        {body.required && <span className={styles.required}>*필수</span>}
      </div>
      <div className={styles.contents}>
        <div className={styles.jsonContents}>
          <pre className={styles.jsonContentsDetails}>{formattedBody}</pre>
        </div>
      </div>
    </div>
  );
}
