import styles from "./api-services.module.css";

type ServiceDescProps = {
  desc: string;
};

export default function ServiceDesc({ desc }: ServiceDescProps) {
  return <span className={styles.serviceDesc}>{desc}</span>;
}
