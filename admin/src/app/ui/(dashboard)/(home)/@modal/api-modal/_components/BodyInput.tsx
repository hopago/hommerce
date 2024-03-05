import useBodyInput from "../hooks/use-body-input";

import Textarea from "../../../_components/Textarea";

import styles from "../api-modal.module.css";

type BodyInputProps = {
  body: unknown;
  required: boolean;
};

export default function BodyInput({ body, required }: BodyInputProps) {
  const formattedBody = JSON.stringify(body, null, 2);

  const { inputValue, handleInputChange, error } = useBodyInput();

  console.log(inputValue);
  console.log(error);

  return (
    <div className={styles.contents}>
      <div className={styles.prepareInfo}>
        <div className={styles.jsonContents}>
          <pre className={styles.jsonContentsDetails}>{formattedBody}</pre>
        </div>
      </div>
      <div className={styles.inputWrap}>
        <Textarea
          value={inputValue}
          placeholder="JSON 형식으로 입력해주세요."
          onChange={handleInputChange}
          className="prepare"
          required={required}
        />
      </div>
    </div>
  );
}
