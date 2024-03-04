"use client"

import { useApiModal } from "@/app/store/use-api-modal";

import styles from "./api-modal.module.css";

export default function ApiModal() {
  const { show, setShow } = useApiModal();

  if (!show) return null;

  return (
    <div className={styles.container}>
      
    </div>
  )
}
