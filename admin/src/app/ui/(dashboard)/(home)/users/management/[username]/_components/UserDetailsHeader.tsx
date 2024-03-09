import { useRouter } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa";

import styles from "./user-details.module.css";

export default function UserDetailsHeader() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/users");
  };

  return (
    <div className={styles.header}>
      <FaArrowLeft onClick={handleNavigate} />
      <h1 className={styles.title}>유저 상세</h1>
    </div>
  );
}
