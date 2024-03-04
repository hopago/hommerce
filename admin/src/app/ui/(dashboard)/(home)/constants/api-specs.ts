import { ApiSpecs, Endpoints } from "../types/api-specs";

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

export const apiSpecs: ApiSpecs = [
  {
    tag: "users",
    endpoints: usersApiSpecs,
  },
];
