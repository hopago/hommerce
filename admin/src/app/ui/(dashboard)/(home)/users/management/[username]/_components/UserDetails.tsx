"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getUsernameByPath } from "../utils/getUsernameByPath";

import { fetchUserBySearchTerm } from "../../../../services/fetchUser";

import { daysToMs } from "../../../../utils/daysToMs";
import ApiRefetch from "../../../../@modal/api-refetch/ApiRefetch";

export default function UserDetails() {
  const username = getUsernameByPath();

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (isLoading) return <UserDetails.Skeleton />;

  if (isError) return <ApiRefetch refetch={refetch} />;

  useEffect(() => {
    if (error) {
      
    }
  }, [isError]);

  return <div>UserDetails</div>;
}

UserDetails.Skeleton = () => <div>Loading...</div>;
