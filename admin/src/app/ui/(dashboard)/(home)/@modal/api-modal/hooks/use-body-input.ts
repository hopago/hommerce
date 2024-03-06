import { useBodyInput as useBodyInputStore } from "@/app/store/use-body-input";

type UseBodyInputParams = {
  onError: (errMsg: string) => void;
};

export default function useBodyInput({ onError }: UseBodyInputParams) {
  const { handleInputChange, errMsg, error, inputValue } = useBodyInputStore();

  if (error && errMsg && errMsg !== "") {
    onError(errMsg);
  }

  return { handleInputChange, errMsg, error, inputValue };
}
