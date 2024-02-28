import { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

export const useSearchForm = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?keyword=${searchTerm}`);
  };

  return {
    searchTerm,
    onChange,
    onSubmit,
    setSearchTerm,
  };
};
