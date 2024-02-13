import { useState } from "react";

export const useFilterOption = () => {
  const [option, setOption] = useState<BookParentCategory | "전체">("전체");

  const onClick = (option: BookParentCategory) => {
    setOption(option);
  };

  return {
    option,
    onClick,
  };
};
