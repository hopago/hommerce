import NextBookItem from "./NextBookItem";

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
      parentCategory: book.parentCategory,
    })),
  ];

  return (
    <div className="recommend-books__today-pick__contents__preview">
      <ol>
        {filteredBooksInfo.map((book) => (
          <NextBookItem key={book.title} book={book} />
        ))}
      </ol>
    </div>
  );
}
