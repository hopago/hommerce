export function getCategoryPath(lang: BookParentCategory[]): LanguageType {
  return lang.find((category) => {
    category === "국내도서";
  })
    ? "kor"
    : "glb";
}
