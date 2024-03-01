import { ProdMDBadge } from "../../../../_components/ProdBadge";
import { calculatePoint } from "../../../../utils/calculate-point";
import { calculateDiscount } from "../../../../utils/calculate-price";

type EBookPriceInfoProps = {
  prodBadgeList: ProdBadgeText[];
  discount: number | undefined;
  discountedPrice: number | undefined;
  unit: string;
  eBookPrice: number | undefined;
};

export default function EBookPriceInfo({
  prodBadgeList,
  discount,
  unit,
  eBookPrice,
}: EBookPriceInfoProps) {
  return (
    <div className="details-single-book__horizontal__price">
      <ul>
        {prodBadgeList.map((text) => (
          <li key={text}>
            <ProdMDBadge text={text} />
          </li>
        ))}
      </ul>
      <div className="details-single-book__horizontal__price__box">
        <span className="info-text">소장</span>
        <div className="info-col">
          <i>정가 : {Number(eBookPrice).toLocaleString()}</i>
          <p>
            쿠폰적용가{" "}
            <strong>
              {calculateDiscount(eBookPrice!, discount)?.toLocaleString()}
            </strong>
            <em>{unit}</em>
          </p>
          <em>
            <span>{discount}% 할인</span>
            <span className="gap">|</span>
            <span>{calculatePoint(eBookPrice!).toLocaleString()}P 적립</span>
          </em>
        </div>
      </div>
      <div className="details-single-book__horizontal__price__info-text">
        <p>
          이 상품은 <strong>배송되지 않는 디지털 상품이며,</strong>
          <br />
          <strong>Hommerce-eBook앱이나 웹뷰어</strong>에서 바로 이용가능합니다.
        </p>
      </div>
    </div>
  );
}
