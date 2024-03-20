export function isDetails(data: any): IDetails | undefined {
  if (data && typeof data === "object" && "bookId" in data) {
    return data;
  }
}
