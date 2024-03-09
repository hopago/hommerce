import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

import Button from "../../_components/Button";

import styles from "./api-refetch.module.css";

import { IUser } from "../../types/user";

type ApiRefetchProps<T> = {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<T[], Error>>;
};

export default function ApiRefetch<T>({ refetch }: ApiRefetchProps<T>) {
  const onClick = async () => {
    await refetch();
  };

  return (
    <section className={styles.conatiner}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <span>데이터를 불러오지 못했어요. 다시 시도하겠어요?</span>
          </div>
          <Button type="button" text="불러오기" onClick={onClick} />
        </div>
      </main>
    </section>
  );
}
