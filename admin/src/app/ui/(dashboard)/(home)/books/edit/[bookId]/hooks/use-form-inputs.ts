import { useCallback, useEffect, useMemo, useState } from "react";

type UseFormInputsParams = {
  initialBook: IBook | undefined;
};

export const useFormInputs = ({ initialBook }: UseFormInputsParams) => {
  const [book, setBook] = useState<Partial<IBook>>({
    title: initialBook?.title,
    author: initialBook?.author,
    publisher: initialBook?.publisher,
    desc: initialBook?.desc,
    comment: initialBook?.comment ?? "",
    price: initialBook?.price,
    unit: initialBook?.unit,
    discount: initialBook?.discount,
    eBookPrice: initialBook?.eBookPrice,
  });

  const memoBook = useMemo(() => book, [book]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setBook({
        ...book,
        [name]: value,
      });
    },
    [book]
  );

  useEffect(() => {
    if (initialBook) {
      setBook(initialBook);
    }
  }, [initialBook]);

  return {
    book: memoBook,
    handleChange,
  };
};
