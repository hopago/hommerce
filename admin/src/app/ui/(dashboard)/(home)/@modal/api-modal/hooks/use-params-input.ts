import { useState } from "react";

type useParamsInput = {
  requestType: "query" | "path";
  name: string;
  valueType: string;
};

export default function useRequestInput({
  requestType,
  name,
  valueType,
}: useParamsInput) {
  const [field, setField] = useState({
    [requestType]: {
      name,
      valueType,
      value: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField((prevState) => ({
      ...prevState,
      [requestType]: {
        ...prevState[requestType],
        value: e.target.value || "",
      },
    }));
  };

  return { field, handleInputChange };
}
