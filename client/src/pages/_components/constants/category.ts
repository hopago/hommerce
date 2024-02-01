import {
  DiscountSvg,
  PickSvg,
  ThisMonthBooksSvg,
  ThumbsUpSvg,
  WorksSvg,
} from "./Icons";

export const recommendGNBList: HeadingCategoryItem[] = [
  {
    text: "할인혜택",
    Icon: DiscountSvg(),
  },
  {
    text: "Picks",
    Icon: PickSvg(),
  },
  {
    text: "이달의 책",
    Icon: ThisMonthBooksSvg(),
  },
  {
    text: "추천",
    Icon: ThumbsUpSvg(),
  },
  {
    text: "인물&작품",
    Icon: WorksSvg(),
  },
];

export const bookParentCategory: BookParentCategoryList = [
  "국내도서",
  "외국도서",
  "eBook",
];