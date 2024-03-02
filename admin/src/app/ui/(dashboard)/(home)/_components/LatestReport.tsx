import Image from "next/image";
import styles from "./latest-report.module.css";

export default function LatestReport() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>최근 문의</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>유저명</td>
            <td>처리 상태</td>
            <td>날짜</td>
            <td>서비스 분류</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.userDetails}>
                <Image
                  className={styles.userImage}
                  src="/img_default-profile.png"
                  width="36"
                  height="36"
                  alt="user-profile"
                  objectFit="cover"
                />
                <span>Hopago</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>완료</span>
            </td>
            <td>
              <span>2024-03-02</span>
            </td>
            <td>
              <span>1:1 문의</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.userDetails}>
                <Image
                  className={styles.userImage}
                  src="/img_default-profile.png"
                  width="36"
                  height="36"
                  alt="user-profile"
                  objectFit="cover"
                />
                <span>Hopago</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                취소
              </span>
            </td>
            <td>
              <span>2024-03-02</span>
            </td>
            <td>
              <span>교환/반품</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.userDetails}>
                <Image
                  className={styles.userImage}
                  src="/img_default-profile.png"
                  width="36"
                  height="36"
                  alt="user-profile"
                  objectFit="cover"
                />
                <span>Hopago</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                처리중
              </span>
            </td>
            <td>
              <span>2024-03-02</span>
            </td>
            <td>
              <span>1:1 문의</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
