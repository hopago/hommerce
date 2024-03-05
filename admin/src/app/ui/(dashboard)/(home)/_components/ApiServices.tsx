import { ApiTag } from "../types/api-specs";

import { getApiSpecsByTag } from "../utils/getApiSpecsByTag";

import ApiSpec from "./ApiSpec";

import styles from "./api-services.module.css";

type ApiServicesProps = {
  tag: ApiTag;
  title: string;
};

export default function ApiServices({ tag, title }: ApiServicesProps) {
  const specs = getApiSpecsByTag(tag);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {specs.map((spec) => (
        <ApiSpec key={spec.desc} spec={spec} />
      ))}
    </div>
  );
}
