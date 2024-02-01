type HeadingCategory = "Picks" | "이달의 책" | "추천" | "인물&작품" | "할인혜택";

type HeadingCategoryItem = {
  text: HeadingCategory;
  Icon: JSX.Element;
};

type BookParentCategory = "국내도서" | "외국도서" | "eBook";

type BookParentCategoryList = BookParentCategory[];