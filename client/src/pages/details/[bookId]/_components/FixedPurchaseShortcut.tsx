import AmountButton from "../../../../_components/AmountButton";
import WishButton from "../../../../_components/WishButton";
import ReuseButton from "../../../../_components/ReuseButton";

import { calculateDiscount } from "../../../../utils/calculate-price";

import { useRecoilValue } from "recoil";
import { amountState } from "../../../../recoil/product-amount";
import { useEffect, useState } from "react";

type FixedPurchaseShortcutProps = {
  price: number | undefined;
  unit: string;
  discount: number | undefined;
};

export default function FixedPurchaseShortcut({
  price,
  unit,
  discount,
}: FixedPurchaseShortcutProps) {
  const discountedPrice = discount
    ? calculateDiscount(price!, discount)
    : price;

  const [total, setTotal] = useState(discountedPrice);
  const amount = useRecoilValue(amountState);

  useEffect(() => {
    if (amount >= 10) {
      alert("수량 10개 이상부터는 대량주문안내를 참고 해주세요.");
    } else {
      setTotal(discountedPrice! * amount);
    }
  }, [amount]);

  return (
    <div className="fixed-purchase-shortcut">
      <div className="fixed-purchase-shortcut__wrap">
        <div className="left-area">
          <span className="info-title">총 상품 금액</span>
          <div className="info-price">
            <span className="price">{total?.toLocaleString()}</span>
            <span className="unit">{unit}</span>
          </div>
        </div>
        <div className="right-area">
          <div className="buttons-wrap">
            <AmountButton size="md" />
            <WishButton />
            <ReuseButton text="장바구니" size="lg" style="default" />
            <ReuseButton text="바로구매" size="lg" style="purple" />
          </div>
        </div>
      </div>
    </div>
  );
}
