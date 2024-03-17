"use client";

import Button from "@/app/ui/(dashboard)/(home)/_components/Button";
import { Navigate } from "@/app/ui/(dashboard)/(home)/users/management/[username]/_components/NavigateButton";
import Image from "next/image";

import styles from "@/app/ui/error.module.css";

import { useEffect } from "react";

import { toast } from "sonner";

type ErrorProps = {
  reset: () => void;
  error: Error;
};

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    toast.error(`${error.message}`);
  }, [error.message]);

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPageWrap}>
        <div className={styles.errorText}>
          <h1>무언가 잘못됐군요...</h1>
          <p>다시 시도해보거나 홈 페이지로 돌아갈 수 있어요.</p>
          <div className={styles.btnWrap}>
            <Navigate path="/" text="홈으로" />
            <Button type="button" text="다시 시도하기" onClick={reset} />
          </div>
        </div>
        <Image
          src="/img_cute-astronaut.png"
          alt="error-fill-image"
          width={512}
          height={512}
          className={styles.errorImg}
        />
      </div>
    </div>
  );
}
