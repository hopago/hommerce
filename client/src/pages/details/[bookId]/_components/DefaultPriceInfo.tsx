import { ProdMDBadge } from "../../../../_components/ProdBadge";

import ProdInfoGuide from "./ProdInfoGuide";

type DefaultPriceInfoProps = {
  prodBadgeList: ProdBadgeText[];
  discount: string | undefined;
  discountedPrice: string | undefined;
  unit: string;
  price: string;
};

export default function DefaultPriceInfo({
  prodBadgeList,
  discount,
  discountedPrice,
  unit,
  price,
}: DefaultPriceInfoProps) {
  return (
    <div className="details-single-book__horizontal__price">
      <ul>
        {prodBadgeList.map((text) => (
          <li key={text}>
            <ProdMDBadge text={text} />
          </li>
        ))}
      </ul>
      <div className="details-single-book__horizontal__price__prod-info">
        <div className="details-single-book__horizontal__price__prod-info__price-container">
          <div className="details-single-book__horizontal__price__prod-info__price-conatiner__wrap">
            {discount && <span className="discount">{discount}</span>}
            {discountedPrice && (
              <span className="discounted-price">
                {discountedPrice}
                {unit}
              </span>
            )}
            <span className="price">
              {price}
              {unit}
            </span>
          </div>
        </div>
        <ProdInfoGuide
          guideTitle="적립/혜택"
          type="point"
          price={discountedPrice ?? price}
        />
        <ProdInfoGuide
          guideTitle="배송안내"
          type="delivery"
          deliverFee="3600"
        />
      </div>
    </div>
  );
}
