import FavorButton from "./FavorButton";
import ReuseButton from "../../../_components/ReuseButton";

import { UIType } from "../hooks/use-select-ui";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../lib/react-query/query-key";
import { QueryFns } from "../../../lib/react-query/queryFn";
import { daysToMs } from "../../../lib/react-query/utils";

import { useUser } from "@clerk/clerk-react";

type BookItemButtonsProps = {
  bookId: string;
  author: string;
  title: string;
  img: string;
  display: UIType;
};

export default function BookItemButtons({
  bookId,
  author,
  title,
  img,
  display,
}: BookItemButtonsProps) {
  const { user } = useUser();

  const { data: favorLength } = useQuery({
    queryKey: [QueryKeys.FAVOR_LENGTH, bookId],
    queryFn: () => QueryFns.GET_FAVOR_SUBSCRIPTION_LENGTH({ bookId }),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
    enabled: !!bookId,
  });
  const { data: isSubscribed } = useQuery({
    queryKey: [QueryKeys.FAVOR_SUBSCRIPTION, bookId],
    queryFn: () =>
      QueryFns.GET_FAVOR_SUBSCRIPTION_IS_SUBSCRIBED({
        bookId,
        userId: user!.id,
      }),
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: Boolean(user),
  });

  const handleAddCart = () => {};

  return (
    <div className="book-item-buttons">
      <FavorButton
        favorLength={favorLength}
        bookId={bookId}
        title={title}
        author={author}
        img={img}
        isSubscribed={isSubscribed}
        userId={user?.id ?? null}
      />
      {display === "flex" && (
        <>
          <ReuseButton
            text="장바구니"
            size="md"
            style="default"
            onClick={handleAddCart}
          />
          <ReuseButton text="바로구매" size="md" style="purple" />
        </>
      )}
    </div>
  );
}
