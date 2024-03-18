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
      <ul className={styles.imagesContainer}>
        {images.length
          ? images.map((image) => <BookImageMutate key={image} image={image} />)
          : null}
        <BookImageUpload />
      </ul>
    </div>
  );
}
