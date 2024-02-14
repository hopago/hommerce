import { cn } from "../lib/utils";

type PurchaseButtonText = "장바구니" | "바로구매";

type ProdPurchaseButtonProps = {
  style?: {
    color: "#2C307C" | "#ffffff";
    backgroundColor: "#2C307C" | "#ffffff";
  };
  text: PurchaseButtonText;
  size: "md" | "lg";
};

export default function ProdPurchaseButton({
  text,
  style = {
    color: "#2C307C",
    backgroundColor: "#ffffff",
  },
  size,
}: ProdPurchaseButtonProps) {
  return (
    <button
      style={{ ...style }}
      className={cn("prod-purchase-button", size && size)}
    >
      <span>{text}</span>
    </button>
  );
}
