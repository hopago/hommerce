import {
  DiscountSvg,
  PickSvg,
  ThisMonthBooksSvg,
  ThumbsUpSvg,
  WorksSvg,
} from "./Icons";

export const recommendGNBList: HeadingCategoryItem[] = [
  {
    text: "이달의 책",
    Icon: ThisMonthBooksSvg(),
  },
  {
    text: "Picks",
    Icon: PickSvg(),
  },
  {
    text: "추천",
    Icon: ThumbsUpSvg(),
  },
  {
    text: "인물&작품",
    Icon: WorksSvg(),
  },
  {
    text: "할인혜택",
    Icon: DiscountSvg(),
  },
];

export const bookParentCategory: BookParentCategoryList = [
  "국내도서",
  "외국도서",
  "eBook",
];

export const bookSubCategory: BookSubCategoryList = [
  "경제 경영",
  "사회 정치",
  "소설",
  "시/에세이",
  "역사",
  "예술",
  "유아",
  "인문",
  "자기 계발",
  "자연과학",
  "종교",
];
