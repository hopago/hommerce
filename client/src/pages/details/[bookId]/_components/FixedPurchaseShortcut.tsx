import AmountButton from "../../../../_components/AmountButton";
import ProdPurchaseButton from "../../../../_components/ProdPurchaseButton";
import WishButton from "../../../../_components/WishButton";
import { calculateDiscount } from "../../../../utils/calculate-price";

type FixedPurchaseShortcutProps = {
  price: number | undefined;
  unit: string;
  discount: string | undefined;
};

export default function FixedPurchaseShortcut({
  price,
  unit,
  discount,
}: FixedPurchaseShortcutProps) {
  const discountedPrice = discount
    ? calculateDiscount(price!, discount)
    : price;

  return (
    <div className="fixed-purchase-shortcut">
      <div className="fixed-purchase-shortcut__wrap">
        <div className="left-area">
          <span className="info-title">총 상품 금액</span>
          <div className="info-price">
            <span className="price">{discountedPrice?.toLocaleString()}</span>
            <span className="unit">{unit}</span>
          </div>
        </div>
        <div className="right-area">
          <div className="buttons-wrap">
            <AmountButton size="md" />
            <WishButton />
            <ProdPurchaseButton text="장바구니" size="lg" style="default" />
            <ProdPurchaseButton text="바로구매" size="lg" style="purple" />
          </div>
        </div>
      </div>
    </div>
  );
}
