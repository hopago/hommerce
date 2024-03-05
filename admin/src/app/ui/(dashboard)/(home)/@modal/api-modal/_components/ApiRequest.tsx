import Button from "../../../_components/Button";
import { ApiMethod, RequestInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";
import BodyPrepare from "./BodyPrepare";

import MethodInfo from "./MethodInfo";
import ParamsPrepare from "./ParamsPrepare";
import PathInfo from "./Path";

type ApiRequestProps = {
  path: string;
  method: ApiMethod;
  params?: RequestInfo;
  query?: RequestInfo;
  body?: {
    value: unknown;
    required: boolean;
  };
};

export default function ApiRequest({
  path,
  method,
  params,
  query,
  body,
}: ApiRequestProps) {
  return (
    <form className={styles.apiRequest}>
      <PathInfo path={path} />
      <MethodInfo method={method} />
      {(params || query) && <ParamsPrepare params={params} query={query} />}
      <BodyPrepare body={body} />
      <Button type="submit" text="제출" />
    </form>
  );
}
