import { useParamsInput } from "@/app/store/use-params-input";

import { ApiMethod } from "../../../types/api-specs";
import { useBodyInput } from "@/app/store/use-body-input";

type UseRequestFormParams = {
  path: string;
  method: ApiMethod;
};

export default function useRequestForm({ path, method }: UseRequestFormParams) {
  const {
    field: { query: queryField, path: pathField },
  } = useParamsInput();
  const { parsedValue } = useBodyInput();

  console.log({ path });
  console.log({ method });
  console.log({ queryField });
  console.log({ pathField });
  console.log({ parsedValue });

  const handleSubmit = () => {};

  return {
    handleSubmit,
  };
}
