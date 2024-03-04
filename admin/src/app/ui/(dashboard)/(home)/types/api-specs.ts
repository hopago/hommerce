type ApiTag = "users" | "products" | "services";

export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiOperationIds =
  | "getCurrUser"
  | "updateUser"
  | "deleteUser"
  | "register";

export type Endpoint = {
  operationId: ApiOperationIds;
  path: string;
  method: ApiMethod;
  desc: string;
};

export type Endpoints = Endpoint[];

export type ApiSpecs = {
  tag: ApiTag;
  endpoints: Endpoints;
}[];

type ResponseType = {
  code: number;
  desc: string;
};

export type ApiInfo = {
  params?: {
    value: string;
    required: boolean;
  };
  query?: {
    value: string;
    required: boolean;
  };
  body?: {
    value: unknown;
    required: boolean;
  };
  responses: ResponseType[];
};

type ApiInfos = ApiInfo[];
