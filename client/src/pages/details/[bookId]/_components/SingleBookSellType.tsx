import { cn } from "../../../../lib/utils";

type SellTypeProps = {
  sellType: SellType;
  price: string;
  eBookPrice: string | undefined;
  currSellType: SellWay;
  setCurrSellType: React.Dispatch<React.SetStateAction<SellWay>>;
};

export default function SingleBookSellType({
  sellType,
  currSellType,
  price,
  eBookPrice,
  setCurrSellType,
}: SellTypeProps) {
  const onClick = (type: SellWay) => {
    setCurrSellType(type);
  };

  return (
    <div className="details-single-book__sell-type">
      <ul>
        {sellType.map((type) => (
          <li
            key={type}
            onClick={() => onClick(type)}
            className={cn("", type === currSellType && "active")}
          >
            <button>
              <span className="prod-type">{type}</span>
              <span className="prod-price">
                {type === "종이책" ? price : eBookPrice}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
