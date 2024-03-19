import * as l from "lodash";

import { useUpdateBook } from "../services/use-update-book";

import { useFormInputs } from "./use-form-inputs";
import { toast } from "sonner";
import { getDifferences } from "../utils/getDifferences";

type UseBookFormProps = {
  initialBook: IBook;
};

export const useBookForm = ({ initialBook }: UseBookFormProps) => {
  const { book, handleChange } = useFormInputs({ initialBook });

  const { mutateBook, isPending } = useUpdateBook({ bookId: initialBook._id });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (l.isEqual(initialBook, book)) {
      toast.message("수정할 사항이 없어요.");
      return;
    }

    const mutatedPart = getDifferences(initialBook, book);

    mutateBook(mutatedPart);
  };

  return {
    book,
    handleChange,
    handleSubmit,
    isPending,
  };
};
