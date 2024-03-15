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

  const { execute, data, isPending, errMsg } = useRequestForm({
    path: apiEndpoint?.path,
    method: apiEndpoint?.method,
    onSuccess: (message?: string) => {
      toast.success(message ?? "요청이 성공적으로 처리 됐습니다.");
    },
    onError: () => {
      toast.error(errMsg);
    },
  });

  const {
    showUpload,
    showUploadButton,
    prepareImage,
    hasImage,
    handleUploadSuccess,
    imgUrls,
  } = useUploadthing({ specs: memoApiSpecs! });

  if (!show || !memoApiSpecs || !memoApiEndpoint) return null;

  const handleClose = async () => {
    if (hasImage) {
      const isConfirm = confirm(
        "이미지가 업로드된 상태에요. 파일을 저장할까요?"
      );

      if (!isConfirm) {
        try {
          await deleteImages(imgUrls!);
        } catch (err: unknown) {
          const { message, status } = err as {
            message: string;
            status: number;
          };

          toast.error(`에러 코드: ${status}, 에러 메시지: ${message}`);
        }
      }
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
          {prepareImage && (
            <Button
              type="button"
              onClick={showUploadButton}
              icon={<MdOutlineAddAPhoto size={23} />}
              className={BUTTON_CLASS.IMG_UPLOAD}
              disabled={false}
            />
          )}
          {hasImage && <ImageUrls urls={imgUrls!} />}
          {showUpload && (
            <div className={styles.uploadButtonWrap}>
              <UploadButton
                appearance={{
                  button({ ready, isUploading }) {
                    return {
                      fontSize: "0.9rem",
                      color: "black",
                      ...(ready && { color: "#ecfdf5" }),
                      ...(isUploading && { color: "#d1d5db" }),
                    };
                  },
                  container: {
                    marginTop: "1rem",
                  },
                  allowedContent: {
                    color: "#a1a1aa",
                  },
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => handleUploadSuccess(res)}
                className="upload-button"
              />
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
