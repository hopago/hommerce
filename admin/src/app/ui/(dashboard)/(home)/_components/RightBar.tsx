import Image from "next/image";

import styles from "./rightbar.module.css";

import RightbarButton from "./RightBarButton";

export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.bgContainer}>
          <Image
            src="/img_astronaut.png"
            alt="sidebar-bg"
            objectFit="contain"
            className={styles.bg}
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>API 데이터</span>
          <h3 className={styles.title}>
            데이터 변형(Mutation) 이전에 API 문서를 숙지해주세요.
          </h3>
          <a href="#api-docs" className={styles.navigate}>
            API 문서로 이동
          </a>
          <p className={styles.subtitle}>
            API 테스트는 각 페이지 하단에 실행 버튼을 눌러주세요.
          </p>
          <RightbarButton />
        </div>
      </div>
    </div>
  );
}
