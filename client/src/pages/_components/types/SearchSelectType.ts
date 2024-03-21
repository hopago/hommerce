type SearchType = "통합검색" | "제목" | "저자";

type SearchSelect = {
  text: SearchType;
  onClick: () => void;
};
