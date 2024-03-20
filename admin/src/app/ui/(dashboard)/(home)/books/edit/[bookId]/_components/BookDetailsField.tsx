import Button from "../../../../_components/Button";
import Label from "../../../../_components/Label";

import Textarea from "../../../../_components/Textarea";

import { translateFieldNameToKor } from "../utils/translateFieldNameToKor";

import styles from "./book-detail-edit.module.css";

import { BookDetailsField } from "./BookDetailsEdit";

type BookDetailsFieldProps = {
  field: BookDetailsField;
  details: IDetails | undefined;
};

export default function BookDetailsField({ field }: BookDetailsFieldProps) {
  return (
    <div className={styles.field}>
      <form className={styles.form}>
        <Label text={translateFieldNameToKor(field)} />
        <Textarea
          name={field}
          onChange={() => {}}
          value=""
          placeholder={`${translateFieldNameToKor(field)}을(를) 입력해주세요.`}
          required={true}
        />
        <div className={styles.buttonWrap}>
          <Button type="submit" text="제출" />
        </div>
      </form>
    </div>
  );
}
