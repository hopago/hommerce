import * as l from "lodash";

export function getDifferences(
  initialBook: IBook,
  book: Partial<IBook>
): Partial<IBook> {
  const differences: Partial<IBook> = {};

  Object.keys(initialBook).forEach((key) => {
    if (book.hasOwnProperty(key) && !l.isEqual(initialBook[key], book[key])) {
      differences[key] = book[key];
    }
  });

  return differences;
}
