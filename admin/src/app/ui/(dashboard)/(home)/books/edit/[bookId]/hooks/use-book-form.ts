import { useUpdateBook } from "../services/use-update-book";

import { useFormInputs } from "./use-form-inputs";

type UseBookFormProps = {
  initialBook: IBook;
};

export const useBookForm = ({ initialBook }: UseBookFormProps) => {
  const { book, handleChange } = useFormInputs({ initialBook });

  const { mutateBook, isPending } = useUpdateBook({ bookId: initialBook._id });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateBook(book);
  };

  return {
    book,
    handleChange,
    handleSubmit,
    isPending,
  };
};
