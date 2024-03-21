import { patchFavorItem } from "../../pages/search/services/patchFavorItem";

type PatchFavorItemProps = { userId: string; book: FavorItem };

export const QueryFns = {
  PATCH_FAVOR_ITEM: ({ userId, book }: PatchFavorItemProps) =>
    patchFavorItem({ userId, book }),
};
