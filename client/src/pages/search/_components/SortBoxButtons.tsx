import SortButton from "./SortButton";
import SwitchButtons from "./SwitchButtons";
import AddFavorButton from "./AddFavorButton";
import AddCartButton from "./AddCartButton";

import { UIType } from "../hooks/use-select-ui";

type SortBoxButtonsProps = {
  onClick: (display: UIType) => void;
  display: UIType
}

export default function SortBoxButtons({ onClick, display }: SortBoxButtonsProps) {
  return (
    <div className="search-contents__container__sort-box__wrapper__buttons">
      {/* API */}
      <AddFavorButton />
      <AddCartButton />
      <SortButton />
      {/* UI */}
      <SwitchButtons onClick={onClick} display={display} />
    </div>
  );
}
