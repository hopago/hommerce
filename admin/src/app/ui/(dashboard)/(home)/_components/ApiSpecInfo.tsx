import { ApiMethod } from "../types/api-specs";

import MethodBadge from "./MethodBadge";
import Pathname from "./Pathname";
import ServiceDesc from "./ServiceDesc";

import styles from "./api-services.module.css";

type ApiSpecInfoProps = {
  method: ApiMethod;
  path: string;
  desc: string;
};

export default function ApiSpecInfo({ method, path, desc }: ApiSpecInfoProps) {
  return (
    <div className={styles.apiSpecsInfo}>
      <MethodBadge method={method} />
      <Pathname path={path} />
      <ServiceDesc desc={desc} />
    </div>
  );
}
