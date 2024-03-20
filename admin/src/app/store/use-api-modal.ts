import { create } from "zustand";

import {
  ApiInfo,
  ApiOperationIds,
  Endpoint,
} from "../ui/(dashboard)/(home)/types/api-specs";

const API_CONSTANTS: Record<ApiOperationIds, ApiInfo> = {
  getCurrUser: {
    query: {
      value: {
        name: "userId",
        type: "string",
        desc: "사용자 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "사용자 정보 조회 성공",
      },
      {
        code: 400,
        desc: "사용자 ID 필요",
      },
      {
        code: 404,
        desc: "사용자를 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  updateUser: {
    body: {
      value: {
        _id: "clerk_id",
        imageUrl: "https://example.com",
        username: "new_user_name",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "사용자 정보 업데이트 성공",
      },
      {
        code: 400,
        desc: "사용자 ID 필요",
      },
      {
        code: 404,
        desc: "사용자를 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  deleteUser: {
    query: {
      value: {
        type: "string",
        name: "userId",
        desc: "삭제하려는 사용자의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 204,
        desc: "사용자 삭제 성공",
      },
      {
        code: 400,
        desc: "사용자 ID 필요",
      },
      {
        code: 404,
        desc: "사용자를 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  register: {
    body: {
      value: {
        id: "clerk_id",
        username: "user_name",
        imageUrl: "https://example.com",
      },
      required: true,
    },
    responses: [
      {
        code: 201,
        desc: "사용자 등록 성공",
      },
      {
        code: 400,
        desc: "사용자 ID, 이름, 이미지 URL 필요",
      },
      {
        code: 409,
        desc: "중복된 사용자 이름",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  getBooks: {
    responses: [
      {
        code: 200,
        desc: "책 목록 조회 성공",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  postBook: {
    body: {
      value: {
        title: "string",
        desc: "string",
        representImg: "string",
        parentCategory: "string",
        category: "string",
        author: "string",
        price: 0,
        unit: "string",
        publisher: "string",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "책 추가 성공",
      },
      {
        code: 400,
        desc: "필수 필드 누락",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
    hasImg: true,
  },
  getBook: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "조회하려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "책 조회 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 404,
        desc: "책을 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  updateBook: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "수정하려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "책 수정 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 404,
        desc: "책을 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
    hasImg: true,
  },
  deleteBook: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "삭제하려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 204,
        desc: "책 삭제 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 404,
        desc: "책을 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  getBookDetails: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "세부 정보를 가져오려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "세부 정보 조회 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  postBookDetails: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "세부 정보를 가져오려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 201,
        desc: "세부 정보 추가 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청 (책 ID 필요 또는 필수 필드 누락)",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  updateBookDetails: {
    params: {
      value: {
        name: "bookId",
        type: "string",
        desc: "세부 정보를 가져오려는 책의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 201,
        desc: "세부 정보 수정 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청 (책 ID 필요 또는 유효하지 않은 필드)",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  getAuthors: {
    responses: [
      {
        code: 200,
        desc: "작가 목록 조회 성공",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  postAuthor: {
    body: {
      value: {
        name: "string",
        job: "string",
        intro: "string",
        representBook: "string",
        img: "string",
      },
      required: true,
    },
    responses: [
      {
        code: 201,
        desc: "작가 추가 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  getAuthor: {
    params: {
      value: {
        name: "authorId",
        type: "string",
        desc: "특정 작가 조회",
      },
      required: true,
    },
    responses: [
      {
        code: 200,
        desc: "작가 조회 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  updateAuthor: {
    params: {
      value: {
        name: "authorId",
        type: "string",
        desc: "수정하려는 작가의 ID",
      },
      required: true,
    },
    body: {
      value: {
        name: "string",
        job: "string",
        intro: "string",
        books: [
          {
            images: ["string"],
            representImg: "string",
            parentCategory: "string",
            category: "string",
            title: "string",
            author: "string",
            discount: "string",
            price: 0,
            eBookPrice: 0,
            unit: "string",
            comment: "string",
            desc: "string",
            publisher: "string",
            sellType: "string",
            createdAt: "2024-03-20T14:01:52.090Z",
            updatedAt: "2024-03-20T14:01:52.090Z",
          },
        ],
        representBook: "string",
        img: "string",
      },
      required: true,
    },
    responses: [
      {
        code: 201,
        desc: "작가 정보 수정 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 404,
        desc: "작가를 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
  deleteAuthor: {
    params: {
      value: {
        name: "authorId",
        type: "string",
        desc: "삭제하려는 작가의 ID",
      },
      required: true,
    },
    responses: [
      {
        code: 204,
        desc: "작가 정보 삭제 성공",
      },
      {
        code: 400,
        desc: "잘못된 요청",
      },
      {
        code: 404,
        desc: "작가를 찾을 수 없음",
      },
      {
        code: 500,
        desc: "서버 오류",
      },
    ],
  },
};

interface CreatorApiModal {
  show: boolean;
  operationId: string | null;
  apiEndpoint: Endpoint | null;
  apiSpecs: ApiInfo | null;
  setShow: (param: boolean) => void;
  setApiEndpoint: (spec: Endpoint) => void;
  setApiSpecs: (operationId: ApiOperationIds) => void;
  resetState: () => void;
}

export const useApiModal = create<CreatorApiModal>((set) => ({
  show: false,
  operationId: null,
  apiEndpoint: null,
  apiSpecs: null,
  setShow: (param: boolean) => set({ show: param }),
  setApiSpecs: (operationId: ApiOperationIds) => {
    const apiConstants = API_CONSTANTS[operationId];
    if (!apiConstants) {
      throw new Error(
        `API_CONSTANTS not found for operationId: ${operationId}`
      );
    }
    set({ apiSpecs: apiConstants });
  },
  setApiEndpoint: (endpoint: Endpoint) => set({ apiEndpoint: endpoint }),
  resetState: () =>
    set({ show: false, operationId: null, apiEndpoint: null, apiSpecs: null }),
}));
