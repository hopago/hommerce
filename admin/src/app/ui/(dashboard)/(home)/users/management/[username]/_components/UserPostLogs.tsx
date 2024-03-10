import { useTabList } from "../hooks/use-tab-list";

import PostLogsTabList from "./PostLogsTabList";

export default function UserPostLogs() {
  const { currTab, setCurrTab } = useTabList();

  return <PostLogsTabList currTab={currTab} setCurrTab={setCurrTab} />;
}
