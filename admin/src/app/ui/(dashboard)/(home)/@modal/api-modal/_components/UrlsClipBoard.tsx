import styles from "./image-urls.module.css";

type TooltipProps = {
  stylesProps: Record<string, any>;
};

export default function Tooltip({ stylesProps }: TooltipProps) {
  return (
    <div className={styles.tooltip} style={stylesProps}>
      <div className={styles.tooltipWrap}>
        <span>클립보드</span>
      </div>
    </div>
  );
}
