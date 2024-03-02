"use client";

import { MdPlayCircleFilled } from "react-icons/md";

import styles from "./rightbar.module.css";

export default function RightBarButton() {
  const onClick = () => {};

  return (
    <button className={styles.button} onClick={onClick}>
      <MdPlayCircleFilled />
      가이드 동영상
    </button>
  );
}
