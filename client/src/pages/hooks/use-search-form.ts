import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState, useSetRecoilState } from "recoil";
import { searchTermState } from "../../recoil/search/search-term";
import { searchPageEnabled } from "../../recoil/api/search-page-enabled";

export const useSearchForm = () => {
  const navigate = useNavigate();

  const setShouldRefetch = useSetRecoilState(searchPageEnabled);
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShouldRefetch(true);

    navigate(`/search?keyword=${searchTerm}`);
  };

  return {
    searchTerm,
    onChange,
    onSubmit,
    setSearchTerm,
  };
};
