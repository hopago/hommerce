import { useEffect, useState } from "react";

import { IUser } from "../../types/user";

import { checkValidResponse } from "../../utils/checkValidResponse";

type UseFilterResultsParams = {
  searchResults: IUser[] | undefined;
  usernames: string[] | null;
  searchTerm: string;
};

export const useFilterResults = ({
  searchResults,
  usernames,
  searchTerm,
}: UseFilterResultsParams) => {
  const [filteredSearchResults, setFilteredSearchResults] = useState<
    IUser[] | null
  >(null);

  const filterSearchResults = () => {
    if (usernames && usernames.length && checkValidResponse(searchResults)) {
      const filteredResults = searchResults!.filter((user: IUser) => {
        usernames.filter((name) => user.username !== name);
      });

      setFilteredSearchResults(filteredResults);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSearchResults(null);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!usernames) {
      return setFilteredSearchResults(searchResults!);
    } else {
      filterSearchResults();
    }
  }, [usernames, searchResults]);

  return filteredSearchResults;
};
