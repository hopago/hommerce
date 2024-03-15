import { toast } from "sonner";

import styles from "./image-urls.module.css";

import { ClipBoard } from "../assets/Clipboard";

import Tooltip from "./UrlsClipBoard";

import { useCopyUrlsToClipboard } from "../hooks/use-copy-urls";
import { useMouseCoordinates } from "../hooks/use-mouse-coordinates";

type ImageUrlsProps = {
  urls: string[];
};

export default function ImageUrls({ urls }: ImageUrlsProps) {
  if (!urls.length) {
    toast.error("이미지 URL을 불러오지 못했어요.");
    return null;
  }

  const { onMouseEnter, onMouseLeave, show, onMouseMove, mousePosition } =
    useMouseCoordinates();
  const { isLoading, onClick } = useCopyUrlsToClipboard(urls);

  return (
    <button
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <div className={styles.wrapper}>
        <ClipBoard onClick={onClick} isLoading={isLoading} />
        {show && (
          <Tooltip
            stylesProps={{
              position: "absolute",
              left: `${mousePosition.x + 16}px`,
              top: `${mousePosition.y - 16}px`,
            }}
          />
        )}
      </div>
    </button>
  );
}
