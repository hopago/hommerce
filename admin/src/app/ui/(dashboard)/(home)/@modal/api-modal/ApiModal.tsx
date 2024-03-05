"use client";

import { useApiModal } from "@/app/store/use-api-modal";
import useRequestForm from "./hooks/use-request-form";

import { useEffect, useMemo } from "react";

import styles from "./api-modal.module.css";

import ApiRequest from "./_components/ApiRequest";
import ApiDocs from "./_components/ApiDocs";
import Button from "../../_components/Button";
import ApiResponse from "./_components/ApiResponse";

import { MdClose } from "react-icons/md";

export default function ApiModal() {
  const { show, setShow, apiSpecs, apiEndpoint, resetState } = useApiModal();

  const memoApiSpecs = useMemo(() => apiSpecs, [apiSpecs]);
  const memoApiEndpoint = useMemo(() => apiEndpoint, [apiEndpoint]);

  const { handleSubmit, data, err, errMsg } = useRequestForm({
    path: apiEndpoint?.path,
    method: apiEndpoint?.method,
  });

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

  if (!show || !memoApiSpecs || !memoApiEndpoint) return null;

  return (
    <section className={styles.container}>
      <div className={styles.bg} />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.prepare}>
            <ApiRequest
              path={memoApiEndpoint.path}
              method={memoApiEndpoint.method}
              params={memoApiSpecs.params}
              query={memoApiSpecs.query}
              body={memoApiSpecs.body}
            />
            <ApiDocs specs={memoApiSpecs} />
          </div>
          <ApiResponse data={data} />
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
