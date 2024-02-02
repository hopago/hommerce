import { useCallback, useState } from "react";

export const useSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchTerm("");
  };

  return {
    searchTerm,
    onChange,
    onSubmit,
    setSearchTerm,
  };
};
