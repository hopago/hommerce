type BookKeys = keyof IBook;

export function getDifferences(
  initialBook: IBook,
  book: Partial<IBook>
): Partial<IBook> {
  const differences: Partial<IBook> = {};

  const allKeys = Array.from(
    new Set([...Object.keys(initialBook), ...Object.keys(book)])
  ) as BookKeys[];

  allKeys.forEach((key) => {
    if (JSON.stringify(initialBook[key]) !== JSON.stringify(book[key])) {
      differences[key] = book[key];
    }
  });

  return differences;
}
