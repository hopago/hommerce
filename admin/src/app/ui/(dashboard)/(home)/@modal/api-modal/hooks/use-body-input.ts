import { useBodyInput as useBodyInputStore } from "@/app/store/use-body-input";

export default function useBodyInput({ body }: { body: unknown }) {
  const { field, handleInputChange, errMsg, error } = useBodyInputStore();

  return { field, handleInputChange, errMsg, error };
}
