import { useFormInputs } from "./use-form-inputs";

type UseBookFormProps = {
  initialBook: IBook;
};

export const useBookForm = ({ initialBook }: UseBookFormProps) => {
  const { book, handleChange } = useFormInputs({ initialBook });

  

  return {
    book,
    handleChange,
  };
};
