import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { getQueryClient } from "@/app/lib/getQueryClient";

import { daysToMs } from "@/app/ui/(dashboard)/(home)/utils/daysToMs";

import { fetchUserBySearchTerm } from "@/app/ui/(dashboard)/(home)/services/fetchUser";

import styles from "@/app/ui/(dashboard)/(home)/users/management/[username]/user-page.module.css";

import TabList from "@/app/ui/(dashboard)/(home)/users/management/[username]/_components/TabList";
import UserDetails from "@/app/ui/(dashboard)/(home)/users/management/[username]/_components/UserDetails";

import { Suspense } from "react";

type UserProps = {
  params: {
    username: string;
  };
};

export default async function User({ params }: UserProps) {
  const { username } = params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user", username],
    queryFn: () => fetchUserBySearchTerm({ searchTerm: username }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.container}>
      <HydrationBoundary state={dehydratedState}>
        <section className={styles.contents}>
          <TabList />
          <Suspense fallback={<UserDetails.Skeleton />}>
            <UserDetails />
          </Suspense>
        </section>
      </HydrationBoundary>
    </div>
  );
}
