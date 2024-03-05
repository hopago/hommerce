"use client";

import { useApiModal } from "@/app/store/use-api-modal";

import { useEffect } from "react";

import styles from "./api-modal.module.css";

import ApiRequest from "./_components/ApiRequest";
import ApiDocs from "./_components/ApiDocs";
import Button from "../../_components/Button";

import { MdClose } from "react-icons/md";

export default function ApiModal() {
  const { show, setShow, apiSpecs, apiEndpoint, resetState } = useApiModal();

  const handleClose = () => {
    resetState();
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show || !apiSpecs || !apiEndpoint) return null;

  return (
    <section className={styles.container}>
      <div className={styles.bg} />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.prepare}>
            <ApiRequest
              path={apiEndpoint.path}
              method={apiEndpoint.method}
              params={apiSpecs.params}
              query={apiSpecs.query}
              body={apiSpecs.body}
            />
            <ApiDocs specs={apiSpecs} />
          </div>
          {/* TODO: <ApiResponse /> */}
          <Button
            type="button"
            onClick={handleClose}
            icon={<MdClose />}
            className="close"
          />
        </div>
      </main>
    </section>
  );
}
