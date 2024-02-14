export function createProdList(
  texts: ProdBadgeText | ProdBadgeText[]
): ProdBadgeText[] {
  const validTexts: ProdBadgeText[] = [
    "오늘의 선택",
    "무료 배송",
    "사은품",
    "이벤트",
    "소득공제",
  ];

  const inputTexts = Array.isArray(texts) ? texts : [texts];

  return inputTexts.filter((text) => validTexts.includes(text));
}
