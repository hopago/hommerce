type SingleBookPriceProps = {
  info: {
    price: string;
    unit: string;
    discount: string | undefined;
  };
  sellType: SellWay;
};

export default function SingleBookPrice({
  info,
  sellType,
}: SingleBookPriceProps) {
  if (sellType === "종이책") {
    return (
      <div className="details-single-book__horizontal__price">
        종이책
      </div>
    )
  }

  if (sellType === "eBook") {
    return (
      <div className="details-single-book__horizontal__price">
        eBook
      </div>
    )
  }

  return null;
}
