import { useParams } from "next/navigation";

import Button from "../../../../_components/Button";
import DetailsTextarea from "./DetailsTextarea";

import { usePostDetails } from "../hooks/use-post-details";

import styles from "./book-detail-edit.module.css";

import { TextareaKeys } from "./BookDetailsEdit";

type PostDetailsFormProps = {
  keys: TextareaKeys[];
};

export default function PostDetailsForm({ keys }: PostDetailsFormProps) {
  const { bookId }: { bookId: string } = useParams();

  const { handleChange, field, handleSubmit, isPending } = usePostDetails({
    bookId,
  });

  return (
    <div className={styles.field}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {keys.map((fieldKey) => (
          <DetailsTextarea
            field={fieldKey}
            value={field[fieldKey]}
            handleChange={handleChange}
          />
        ))}
        <div className={styles.buttonWrap}>
          <Button type="submit" text="제출" disabled={isPending} />
        </div>
      </form>
    </div>
  );
}
