import { FilterOptions } from "../hooks/use-filter-option";

export default function handleNoDataMessage(option: FilterOptions) {
  if (option !== "eBook") {
    return `최근 본 ${option}가 없습니다.`;
  } else {
    return `최근 본 ${option}이 없습니다.`;
  }
}
