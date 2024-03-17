type BookDetails = {
  bookId: string;
};

export default function BookDetails({ bookId }: BookDetails) {
  return <div>{bookId}</div>;
}
