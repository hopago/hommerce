type HeadingCategory =
  | "Picks"
  | "이달의 책"
  | "추천"
  | "인물&작품"
  | "할인혜택";

type HeadingCategoryItem = {
  text: HeadingCategory;
  Icon: JSX.Element;
};

type BookParentCategory = "국내도서" | "외국도서" | "eBook";

type BookParentCategoryList = BookParentCategory[];

type BookSubCategory =
  | "경제/경영"
  | "소설"
  | "시/에세이"
  | "인문"
  | "역사"
  | "예술"
  | "종교"
  | "사회 정치"
  | "자연과학"
  | "경제 경영"
  | "자기 계발"
  | "인물"
  | "유아"
  | "현대지성";

type BookSubCategoryList = BookSubCategory[];
