"use client"

import styles from "@/app/ui/not-found.module.css";

import Image from "next/image";

import { Navigate } from "./ui/(dashboard)/(home)/users/management/[username]/_components/NavigateButton";

export default function GlobalNotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.wrap}>
        <div className={styles.texts}>
          <h1>404 NOT FOUND</h1>
          <p className={styles.md}>페이지를 찾지 못했어요.</p>
          <p className={styles.sm}>페이지 주소를 다시 한 번 확인해주세요.</p>
          <Navigate path="/" text="홈페이지로" />
        </div>
        <Image
          src="/img_cute-astronaut.png"
          alt="not-found-image"
          width={512}
          height={512}
          className={styles.notFoundImg}
        />
      </div>
    </div>
  );
}
