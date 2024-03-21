export const ERROR_DETAILS = {
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
