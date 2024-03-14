"use client";

import { useApiModal } from "@/app/store/use-api-modal";

import useRequestForm from "./hooks/use-request-form";

import { useEffect, useMemo } from "react";

import styles from "./api-modal.module.css";

import ApiRequest from "./_components/ApiRequest";
import ApiDocs from "./_components/ApiDocs";
import Button from "../../_components/Button";
import ApiResponse from "./_components/ApiResponse";

import { MdClose, MdOutlineAddAPhoto } from "react-icons/md";

import { toast } from "sonner";

import { BUTTON_CLASS } from "../../constants/classNames";

import { UploadButton } from "@/app/utils/uploadthing/uploadthing";
import ImageUrls from "./_components/ImageUrls";
import { useUploadthing } from "./hooks/use-uploadthing";
import { deleteImages } from "@/app/actions/utApi";

export default function ApiModal() {
  const { show, setShow, apiSpecs, apiEndpoint, resetState } = useApiModal();

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

  const memoApiSpecs = useMemo(() => apiSpecs, [apiSpecs]);
  const memoApiEndpoint = useMemo(() => apiEndpoint, [apiEndpoint]);

  const { execute, data, isPending } = useRequestForm({
    path: apiEndpoint?.path,
    method: apiEndpoint?.method,
    onSuccess: (message?: string) => {
      toast.success(message ?? "요청이 성공적으로 처리 됐습니다.");
    },
    onError: (message: string) => {
      toast.error(`${message}`);
    },
  });

  const {
    showUpload,
    showUploadButton,
    prepareImage,
    handleUploadSuccess,
    imgUrls,
  } = useUploadthing({ specs: memoApiSpecs! });

  if (!show || !memoApiSpecs || !memoApiEndpoint) return null;

  const handleClose = async () => {
    if (imgUrls?.length) {
      const isConfirm = confirm(
        "이미지가 업로드된 상태에요. 파일을 저장할까요?"
      );

      !isConfirm && (await deleteImages(imgUrls));
    }
    resetState();
    setShow(false);
  };

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
              onSubmit={execute}
            />
            <ApiDocs specs={memoApiSpecs} />
          </div>
          <ApiResponse data={data} />
          <Button
            type="button"
            onClick={handleClose}
            icon={<MdClose />}
            className={BUTTON_CLASS.CLOSE}
            disabled={isPending}
          />
          {prepareImage ? (
            <Button
              type="button"
              onClick={showUploadButton}
              icon={<MdOutlineAddAPhoto />}
              className={BUTTON_CLASS.IMG_UPLOAD}
              disabled={false}
            />
          ) : (
            <ImageUrls urls={imgUrls!} />
          )}
          {showUpload && (
            <div className={styles.uploadButtonWrap}>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => handleUploadSuccess(res)}
              />
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
