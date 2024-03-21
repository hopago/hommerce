import { toast } from "sonner";

import { restFetcher } from "../../../fetcher/restFetcher";

type PatchFavorItemProps = {
  userId: string | null;
  book: FavorItem;
};

export const patchFavorItem = async ({ userId, book }: PatchFavorItemProps) => {
  if (!userId) {
    toast.info("로그인 이후 이용하실 수 있습니다.");
    return;
  }

  const path = `/favor/${userId}`;

  try {
    const favorItem = await restFetcher<FavorList>({
      method: "PATCH",
      path,
      body: book,
    });

    return favorItem;
  } catch (err) {
    throw err;
  }
};
