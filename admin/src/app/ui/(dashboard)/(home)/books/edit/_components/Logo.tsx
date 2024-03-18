import Image from "next/image";

import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoWrap}>
      <Image src="/logo.png" width={150} height={150} alt="hommerce-logo" />
      <h1>Hommerce</h1>
    </div>
  );
}
