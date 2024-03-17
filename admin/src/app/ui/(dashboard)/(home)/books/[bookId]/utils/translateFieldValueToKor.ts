type TFieldTranslations = {
  [key: string]: any;
  title: string;
  author: string;
  publisher: string;
  parentCategory: string;
  category: string;
  desc: string;
};

const fieldTranslations: TFieldTranslations = {
  title: "제목",
  price: "가격",
  author: "저자",
  publisher: "출판사",
  parentCategory: "상위 분야",
  category: "책 카테고리",
  desc: "설명",
  images: "부가 이미지",
  discount: "할인율",
  eBookPrice: "전자책 가격",
  unit: "가격 단위",
  comment: "출판사 코멘트",
  sellType: "판매 방식",
};

export function translateFieldTitleToKor(title: string) {
  const fieldName = fieldTranslations[title];

  if (!fieldName) return null;

  return fieldName;
}
