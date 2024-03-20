import styles from "./book-info.module.css";

import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";

import BookImageMutate from "./BookImageMutate";
import BookImageUpload from "./BookImageUpload";

type BookInfoDetailsImagesProps = {
  title: string;
  images: string[];
};

export default function BookInfoDetailsImages({
  title,
  images,
}: BookInfoDetailsImagesProps) {
  return (
    <div className={styles.detailsCardContainer}>
      <h3>{translateFieldTitleToKor(title)}</h3>
      <p>이미지 삭제는 마우스 좌클릭을 통해 가능합니다</p>
      <div className={styles.imagesContainer}>
        {images.length
          ? images.map((image, i) => (
              <BookImageMutate key={`${image}-${i}`} image={image} />
            ))
          : null}
        <BookImageUpload />
      </div>
    </div>
  );
}
