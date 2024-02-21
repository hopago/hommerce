import { cn } from "../lib/utils";

type PurchaseButtonText = "장바구니" | "바로구매";

type FAQText = "반품/교환 신청" | "1:1문의";

type ProdPurchaseButtonProps = {
  style: "default" | "purple";
  text: PurchaseButtonText | FAQText;
  size: "md" | "lg";
  icon?: JSX.Element | string;
};

export default function ReuseButton({
  text,
  style,
  size,
  icon,
}: ProdPurchaseButtonProps) {
  let iconContent: JSX.Element | string | null = null;

  if (typeof icon === "string") {
    iconContent = (
      <div className="img-wrap">
        <img src={icon} alt="button-img" />
      </div>
    );
  } else {
    iconContent = icon as JSX.Element;
  }

  return (
    <button
      className={cn("prod-purchase-button", style && style, size && size)}
    >
      {iconContent && iconContent}
      <span>{text}</span>
    </button>
  );
}
