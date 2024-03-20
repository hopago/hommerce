import { ApiSpecs, Endpoints } from "../types/api-specs";

const booksApiSpecs: Endpoints = [
  {
    operationId: "getBooks",
    path: "/book",
    method: "GET",
    desc: "책 목록 조회",
  },
  {
    operationId: "postBook",
    path: "/book",
    method: "POST",
    desc: "책 추가",
  },
  {
    operationId: "getBook",
    path: "/book",
    method: "GET",
    desc: "특정 책 조회",
  },
  {
    operationId: "updateBook",
    path: "/book",
    method: "PATCH",
    desc: "특정 책 수정",
  },
  {
    operationId: "deleteUser",
    path: "/book",
    method: "DELETE",
    desc: "특정 책 삭제",
  },
  {
    operationId: "getBookDetails",
    path: "/book/details",
    method: "GET",
    desc: "책의 세부정보 가져오기",
  },
  {
    operationId: "postBookDetails",
    path: "/book/details",
    method: "POST",
    desc: "책의 세부정보 추가",
  },
  {
    operationId: "updateBookDetails",
    path: "/book/details",
    method: "PATCH",
    desc: "책의 세부정보 수정",
  },
];

const usersApiSpecs: Endpoints = [
  {
    operationId: "getCurrUser",
    path: "/user",
    method: "GET",
    desc: "현재 사용자 정보 조회",
  },
  {
    operationId: "updateUser",
    path: "/user",
    method: "PATCH",
    desc: "사용자 정보 업데이트",
  },
  {
    operationId: "deleteUser",
    path: "/user",
    method: "DELETE",
    desc: "사용자 삭제",
  },
  {
    operationId: "register",
    path: "/user/session",
    method: "POST",
    desc: "사용자 등록",
  },
];

const authorsApiSpecs: Endpoints = [
  {
    operationId: "getAuthors",
    path: "/author",
    method: "GET",
    desc: "작가 목록 조회",
  },
  {
    operationId: "postAuthor",
    path: "/author",
    method: "POST",
    desc: "새로운 작가 추가",
  },
  {
    operationId: "getAuthor",
    path: "/author",
    method: "GET",
    desc: "특정 작가 조회",
  },
  {
    operationId: "updateAuthor",
    path: "/author",
    method: "PATCH",
    desc: "특정 작가 정보 수정",
  },
  {
    operationId: "deleteAuthor",
    path: "/author",
    method: "DELETE",
    desc: "특정 작가 삭제",
  },
];

export const apiSpecs: ApiSpecs = [
  {
    tag: "users",
    endpoints: usersApiSpecs,
  },
  {
    tag: "books",
    endpoints: booksApiSpecs,
  },
  {
    tag: "authors",
    endpoints: authorsApiSpecs,
  },
];
