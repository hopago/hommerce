import { Dispatch, SetStateAction, useState } from "react";

import { logTabList } from "../constants/log-tab-list";
import { LogTabList } from "../types/log-tab-list";

import { SELECT_CLASS } from "../../../../constants/classNames";

import SelectList from "../../../../_components/SelectList";

type PostLogsTabListProps = {
  currTab: LogTabList;
  setCurrTab: Dispatch<SetStateAction<LogTabList>>;
};

export default function PostLogsTabList({
  currTab,
  setCurrTab,
}: PostLogsTabListProps) {
  const [show, setShow] = useState(false);

  const handleTabClick = (tab: LogTabList) => {
    setCurrTab(tab);
    setShow(false);
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <SelectList
      currSelect={currTab}
      handleItemClick={handleTabClick}
      selectList={logTabList}
      show={show}
      setShow={setShow}
      handleShow={handleShow}
      className={SELECT_CLASS.POST_LOGS_SELECT}
    />
  );
}
