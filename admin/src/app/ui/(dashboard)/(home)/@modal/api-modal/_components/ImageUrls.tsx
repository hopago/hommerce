import { toast } from "sonner";

import styles from "./image-urls.module.css";

type ImageUrlsProps = {
  urls: string[];
};

export default function ImageUrls({ urls }: ImageUrlsProps) {
  if (!urls.length) {
    toast.error("이미지 URL을 불러오지 못했어요.");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul>
          {urls.map((url) => (
            <li key={url}>
              <span>{url}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
