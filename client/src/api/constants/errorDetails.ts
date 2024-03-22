export const ERROR_DETAILS = {
  FIND_RECOMMEND_BOOK_BY_CATEGORY: [
    {
      code: 400,
      message: "연관 카테고리가 필요합니다.",
    },
    {
      code: 500,
      message: "서버 오류입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
  GET_BOOK: [
    {
      code: 400,
      message: "책 아이디가 필요합니다.",
    },
    {
      code: 500,
      message: "서버 오류입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
  GET_BOOK_DETAILS: [
    {
      code: 400,
      message: "책 아이디가 필요합니다.",
    },
    {
      code: 404,
      message: "책 상세 내용이 아직 없어요.",
    },
    {
      code: 500,
      message: "서버 에러입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
  BOOKS_DOCS_LENGTH: [
    {
      code: 400,
      message: "검색어 설정 오류입니다. 잠시 후 다시 시도해주세요.",
    },
    {
      code: 404,
      message: "검색 결과가 없어요.",
    },
    {
      code: 500,
      message: "서버 오류입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
  BOOKS_SEARCH_RESULTS: [
    {
      code: 404,
      message: "검색 결과가 없어요.",
    },
    {
      code: 500,
      message: "서버 오류입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
  PATCH_FAVOR_ITEM: [
    {
      code: 400,
      message: "필드 오류입니다. 로그인 상태 혹은 새로고침을 해주세요.",
    },
    {
      code: 500,
      message: "서버 오류입니다. 잠시 후 다시 시도해주세요.",
    },
  ],
};
