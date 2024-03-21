import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { searchTermState } from "../../recoil/search/search-term";

export const useSearchForm = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

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
