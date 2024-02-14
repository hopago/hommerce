type SingleBookPriceProps = {
  info: {
    price: string;
    unit: string;
    discount: string | undefined;
  };
};

export default function SingleBookPrice({ info }: SingleBookPriceProps) {
  return <div className="details-single-book__horizontal__price">price</div>;
}
