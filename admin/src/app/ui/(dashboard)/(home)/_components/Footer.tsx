import Image from "next/image";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width="24"
            height="24"
            alt="logo-img"
            className={styles.logoImg}
          />
          <span className={styles.logoText}>Hommerce</span>
        </div>
        <div className={styles.text}>ⓒ All right reserved.</div>
      </div>
    </footer>
  );
}
