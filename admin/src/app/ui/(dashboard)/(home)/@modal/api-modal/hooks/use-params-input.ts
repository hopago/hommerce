import { useParamsInput as useParamsInputStore } from "@/app/store/use-params-input";

type useParamsInput = {
  requestType: "query" | "path";
  name: string;
  valueType: string;
};

export default function useParamsInput({
  requestType,
  name,
  valueType,
}: useParamsInput) {
  const { field, setField } = useParamsInputStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField({ requestType, name, valueType, value: e.target.value || "" });
  };

  return { field, handleInputChange };
}
