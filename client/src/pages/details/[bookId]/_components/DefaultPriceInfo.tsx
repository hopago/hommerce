import { useState } from "react";

import { ProdMDBadge } from "../../../../_components/ProdBadge";
import ProdInfoGuide from "./ProdInfoGuide";

type DefaultPriceInfoProps = {
  prodBadgeList: ProdBadgeText[];
  discount: number | undefined;
  discountedPrice: number | undefined;
  unit: string;
  price: number;
};

export default function DefaultPriceInfo({
  prodBadgeList,
  discount,
  discountedPrice,
  unit,
  price,
}: DefaultPriceInfoProps) {
  const [openTooltip, setOpenTooltip] = useState<null | "point" | "delivery">(
    null
  );

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
          <DisplayDiscount
            discount={discount}
            discountedPrice={discountedPrice}
            unit={unit}
            price={price}
          />
        </div>
        <ProdInfoGuide
          guideTitle="적립/혜택"
          type="point"
          price={discountedPrice ?? price}
          openTooltip={openTooltip}
          setOpenTooltip={setOpenTooltip}
        />
        <ProdInfoGuide
          guideTitle="배송안내"
          type="delivery"
          deliverFee="3600"
          openTooltip={openTooltip}
          setOpenTooltip={setOpenTooltip}
        />
      </div>
    </div>
  );
}

function DisplayDiscount({
  discount,
  discountedPrice,
  unit,
  price,
}: {
  discount: number | undefined;
  discountedPrice: number | undefined;
  unit: string;
  price: number;
}) {
  return (
    <>
      {discount ? (
        <>
          <span className="discount">{discount}%</span>
          {discountedPrice && (
            <span className="discounted-price">
              {Number(discountedPrice).toLocaleString()}
              <span className="unit">{unit}</span>
            </span>
          )}
          <span className="price">
            {Number(price).toLocaleString()}
            <span className="unit">{unit}</span>
          </span>
        </>
      ) : (
        <span className="discounted-price">
          {Number(price).toLocaleString()}
          <span className="unit">{unit}</span>
        </span>
      )}
    </>
  );
}
