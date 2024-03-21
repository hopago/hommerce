import { patchFavorItem } from "../../pages/search/services/patchFavorItem";

type PatchFavorItemProps = { userId: string | null; book: FavorItem };

export const MutateFns = {
  PATCH_FAVOR_ITEM: ({ userId, book }: PatchFavorItemProps) =>
    patchFavorItem({ userId, book }),
};
