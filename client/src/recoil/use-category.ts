import { DefaultValue, atom, selector } from "recoil";

type CategoryType = {
  parentCategory: BookParentCategory[] | null | undefined;
  category: BookSubCategory | null | undefined;
};

export const gnbCategoryState = atom<CategoryType>({
  key: "gnbCategoryState",
  default: {
    parentCategory: null,
    category: null,
  },
});

export const setGNBCategory = selector({
  key: "setGNBCategoryState",
  get: ({ get }) => get(gnbCategoryState),
  set: ({ set }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      set(gnbCategoryState, newValue);
    }
  },
});
