import { useState } from "react";

import { LogTabList } from "../types/log-tab-list";

export const useTabList = () => {
  const [currTab, setCurrTab] = useState<LogTabList>("리뷰");

  return {
    currTab,
    setCurrTab,
  };
};
