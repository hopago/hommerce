"use client";

import { MdAdd } from "react-icons/md";

import Button from "./Button";
import ApiSpecInfo from "./ApiSpecInfo";

import styles from "./api-services.module.css";

import { useApiModal } from "@/app/store/use-api-modal";

import { Endpoint } from "../types/api-specs";

type ApiSpecProps = {
  spec: Endpoint;
};

export default function ApiSpec({ spec }: ApiSpecProps) {
  const { setShow, setApiSpecs, setApiEndpoint } = useApiModal();

  const onClick = () => {
    setApiSpecs(spec.operationId);
    setApiEndpoint(spec);
    setShow(true);
  };

  return (
    <div className={styles.apiSpecsContainer}>
      <ApiSpecInfo method={spec.method} path={spec.path} desc={spec.desc} />
      <Button type="button" text="실행" icon={<MdAdd />} onClick={onClick} />
    </div>
  );
}
