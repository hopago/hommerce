import { useState } from "react";

type ClientFunctionTypes = "도움말" | "대시보드";
type ApiCallFunctionTypes = "유저" | "상품" | "서비스" | "설정";

type UseSearchProps = {
  type: ClientFunctionTypes | ApiCallFunctionTypes;
};

export default function useSearchForm({ type }: UseSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clientFunctions: Record<ClientFunctionTypes, () => void> = {
    대시보드: () => {
      // TODO: Navigate | Show tool tip modal
    },
    도움말: () => {
      // TODO: Show tooltip modal
    },
  };

  const apiCallFunctions: Record<ApiCallFunctionTypes, () => void> = {
    // TODO: Get api response
    유저: () => {},
    상품: () => {},
    서비스: () => {},
    설정: () => {},
  };

  const handleSubmit = () => {
    let functionToCall: (() => void) | undefined;

    if (Object.keys(clientFunctions).includes(type)) {
      functionToCall = clientFunctions[type as ClientFunctionTypes];
    } else {
      functionToCall = apiCallFunctions[type as ApiCallFunctionTypes];
    }

    if (!functionToCall) {
      throw new Error(`Something went wrong in type: ${type}`);
    }

    return functionToCall();
  };

  return {
    searchTerm,
    handleChange,
    handleSubmit,
  };
}
