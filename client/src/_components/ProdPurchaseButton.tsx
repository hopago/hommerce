import { cn } from "../lib/utils";

type PurchaseButtonText = "장바구니" | "바로구매";

type ProdPurchaseButtonProps = {
  style: "default" | "purple";
  text: PurchaseButtonText;
  size: "md" | "lg";
};

export default function ProdPurchaseButton({
  text,
  style,
  size,
}: ProdPurchaseButtonProps) {
  return (
    <button
      className={cn("prod-purchase-button", style && style, size && size)}
    >
      <span>{text}</span>
    </button>
  );
}
