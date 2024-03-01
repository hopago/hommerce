import { createProdList } from "../../../../utils/create-prod-list";
import { calculateDiscount } from "../../../../utils/calculate-price";

import DefaultPriceInfo from "./DefaultPriceInfo";
import EBookPriceInfo from "./EBookPriceInfo";

type SingleBookPriceProps = {
  price: number;
  unit: string;
  discount: number | undefined;
  sellType: SellWay;
  eBookPrice: number | undefined;
};

export default function SingleBookPrice({
  price,
  unit,
  discount,
  sellType,
  eBookPrice,
}: SingleBookPriceProps) {
  const prodBadgeList = createProdList([
    "무료 배송",
    "소득공제",
    "이벤트",
    "오늘의 선택",
  ]);

  const discountedPrice = discount ? calculateDiscount(price, discount) : price;

  const PriceInfo = sellType === "종이책" ? DefaultPriceInfo : EBookPriceInfo;

  return (
    <PriceInfo
      prodBadgeList={prodBadgeList}
      discountedPrice={discountedPrice}
      price={price}
      eBookPrice={eBookPrice}
      unit={unit}
      discount={discount}
    />
  );
}
