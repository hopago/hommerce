import { RequestInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

import Input from "../../../_components/Input";

import useParamsInput from "../hooks/use-params-input";

type RequestInfoProps = {
  info: RequestInfo;
  requestInputType: "query" | "path";
};

export default function ParamsInput({
  info,
  requestInputType,
}: RequestInfoProps) {
  const {
    value: { name, type, desc },
    required,
  } = info;

  const { field, handleInputChange } = useParamsInput({
    requestType: requestInputType,
    name,
    valueType: type,
  });

  return (
    <div className={styles.requestInfo}>
      <div className={styles.prepareInfo}>
        <span>{name}</span>
        <span>{type}</span>
        <span>{desc}</span>
      </div>
      <div className={styles.inputWrap}>
        <Input
          type="text"
          value={field[type].value}
          placeholder={desc}
          onChange={handleInputChange}
          className="prepare"
          required={required}
        />
      </div>
    </div>
  );
}
