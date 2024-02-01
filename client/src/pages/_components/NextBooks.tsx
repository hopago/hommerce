type NextBooksProps = {
  books: TBooks;
};

export default function NextBooks({ books }: NextBooksProps) {
  const filteredBooksInfo = [
    ...books.map((book) => ({
      id: book.id,
      title: book.title,
      category: book.category,
      img: book.img,
    })),
  ];

  return <div>NextBooks</div>;
}
