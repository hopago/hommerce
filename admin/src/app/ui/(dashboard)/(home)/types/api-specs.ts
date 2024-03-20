export type ApiTag = "users" | "books" | "authors";

export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiOperationIds =
  | "getCurrUser"
  | "updateUser"
  | "deleteUser"
  | "register"
  | "getBooks"
  | "postBook"
  | "getBook"
  | "updateBook"
  | "deleteBook"
  | "getBookDetails"
  | "postBookDetails"
  | "updateBookDetails"
  | "getAuthors"
  | "postAuthor"
  | "getAuthor"
  | "updateAuthor"
  | "deleteAuthor";

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

export type ResponseType = {
  code: number;
  desc: string;
};

export type RequestInfo = {
  value: {
    name: string;
    type: string;
    desc: string;
  };
  required: boolean;
};

export type ApiInfo = {
  params?: RequestInfo;
  query?: RequestInfo;
  body?: {
    value: unknown;
    required: boolean;
  };
  responses: ResponseType[];
  hasImg?: boolean;
};
