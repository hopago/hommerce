import { useState } from "react";

export type FilterOptions = BookParentCategory | "전체";

export const useFilterOption = () => {
  const [option, setOption] = useState<FilterOptions>("전체");

  const onClick = (option: FilterOptions) => {
    setOption(option);
  };

  return {
    option,
    onClick,
  };
};
