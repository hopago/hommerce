import { ApiInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

import Body from "./Body";
import Params from "./Params";
import Responses from "./Responses";

type ApiDocsProps = {
  specs: ApiInfo;
};

export default function ApiDocs({ specs }: ApiDocsProps) {
  return (
    <div className={styles.apiDocs}>
      {(specs.params || specs.query) && (
        <Params params={specs.params} query={specs.query} />
      )}
      {specs.body && <Body body={specs.body} />}
      <Responses responses={specs.responses} />
    </div>
  );
}
