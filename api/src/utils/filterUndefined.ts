import { Request } from "express";

export function filterUndefinedFieldOfObject(req: Request) {
  const filteredData = Object.keys(req.body).reduce(
    (acc: Record<string, unknown>, key: string | number) => {
      if (req.body[key] !== undefined) {
        acc[key] = req.body[key];
      }
      return acc;
    },
    {}
  );

  return filteredData;
}
