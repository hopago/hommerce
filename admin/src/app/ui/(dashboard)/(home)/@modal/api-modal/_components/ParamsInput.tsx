import { RequestInfo } from "../../../types/api-specs";

import { useMemo } from "react";

import styles from "../api-modal.module.css";

import Input from "../../../_components/Input";

import useParamsInput from "../hooks/use-params-input";

import { INPUT_CLASS } from "../../../constants/classNames";

type RequestInfoProps = {
  info: RequestInfo;
  paramsType: "query" | "path";
};

export default function ParamsInput({ info, paramsType }: RequestInfoProps) {
  const memoInfo = useMemo(() => info, [info]);
  
  const {
    value: { name, type, desc },
    required,
  } = memoInfo;

  const { field, handleInputChange } = useParamsInput({
    paramsType,
    name,
    valueType: type,
  });

  return (
    <div className={styles.requestInfo}>
      <div className={styles.prepareInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.query}>({paramsType})</span>
        <span className={styles.desc}>{desc}</span>
      </div>
      <div className={styles.inputWrap}>
        <Input
          type="text"
          value={field[paramsType]?.value!}
          placeholder={desc}
          onChange={handleInputChange}
          className={INPUT_CLASS.API_PREPARE}
          required={required}
        />
      </div>
    </div>
  );
}
