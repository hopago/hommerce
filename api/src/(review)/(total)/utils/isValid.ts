export function isValidRating(rating: string): boolean {
  const validRatings = ["1", "2", "3", "4", "5"];

  return validRatings.includes(rating);
}

export function isValidKeyword(keyword: string): boolean {
  const validKeywords = [
    "쉬웠어요",
    "집중돼요",
    "도움돼요",
    "최고에요",
    "추천해요",
  ];

  return validKeywords.includes(keyword);
}
