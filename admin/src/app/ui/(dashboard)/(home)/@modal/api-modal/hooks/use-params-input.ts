import { useParamsInput as useParamsInputStore } from "@/app/store/use-params-input";

type useParamsInput = {
  paramsType: "query" | "path";
  name: string;
  valueType: string;
};

export default function useParamsInput({
  paramsType,
  name,
  valueType,
}: useParamsInput) {
  const { field, setField } = useParamsInputStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField({ paramsType, name, valueType, value: e.target.value || "" });
  };

  return { field, handleInputChange };
}
