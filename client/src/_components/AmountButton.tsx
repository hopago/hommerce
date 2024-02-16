import minus from "../assets/ico_minus.png";
import plus from "../assets/ico_plus.png";

import { cn } from "../lib/utils";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { amountState, setAmountState } from "../recoil/product-amount";

export default function AmountButton({ size }: { size: "sm" | "md" }) {
  const amount = useRecoilValue(amountState);
  const setAmountSelector = useSetRecoilState(setAmountState);

  const increaseAmount = () => {
    if (amount < 10) {
      setAmountSelector(1);
    }
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmountSelector(-1);
    }
  };

  return (
    <button className={cn("amount-btn", size && size)}>
      <div className="flex-between">
        <div className="img-wrap" onClick={decreaseAmount}>
          <img src={minus} alt="minus-icon" />
        </div>
        <span>{amount}</span>
        <div className="img-wrap" onClick={increaseAmount}>
          <img src={plus} alt="plus-icon" />
        </div>
      </div>
    </button>
  );
}
