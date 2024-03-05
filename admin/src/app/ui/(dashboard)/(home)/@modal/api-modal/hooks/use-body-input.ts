import { useBodyInput as useBodyInputStore } from "@/app/store/use-body-input";

export default function useBodyInput() {
  const { handleInputChange, errMsg, error, inputValue } = useBodyInputStore();

  return { handleInputChange, errMsg, error, inputValue };
}
