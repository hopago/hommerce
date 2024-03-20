import Button from "../../../../_components/Button";
import DetailsTextarea from "./DetailsTextarea";

import { useUpdateDetails } from "../hooks/use-update-details";

import styles from "./book-detail-edit.module.css";

import { TextareaKeys } from "./BookDetailsEdit";

import { useParams } from "next/navigation";

type UpdateDetailsFromProps = {
  details: IDetails | undefined;
  field: TextareaKeys;
};

export default function UpdateDetailsForm({
  details,
  field,
}: UpdateDetailsFromProps) {
  const { bookId }: { bookId: string } = useParams();

  const { value, handleChange, handleSubmit, isPending } = useUpdateDetails({
    details,
    field,
    bookId,
  });

  return (
    <div className={styles.field}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DetailsTextarea
          field={field}
          value={value}
          handleChange={handleChange}
        />
        <div className={styles.buttonWrap}>
          <Button type="submit" text="제출" disabled={isPending} />
        </div>
      </form>
    </div>
  );
}
