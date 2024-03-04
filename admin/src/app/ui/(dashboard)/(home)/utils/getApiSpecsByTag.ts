import { apiSpecs } from "../constants/api-specs";

export const getApiSpecsByTag = (tag: ApiTag) => {
  const findApiSpecs = apiSpecs.find((ele) => ele.tag === tag);
  if (!findApiSpecs) throw new Error("Invalid tag.");

  return findApiSpecs.endpoints;
};
