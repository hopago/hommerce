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
        id: "clerk_id",
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
