import { useUpdateBook } from "../services/use-update-book";

import { useFormInputs } from "./use-form-inputs";
import { toast } from "sonner";
import { getDifferences } from "../utils/getDifferences";

type UseBookFormProps = {
  initialBook: IBook | undefined;
  bookId: string;
};

const validFields = [
  "title",
  "desc",
  "representImg",
  "parentCategory",
  "category",
  "author",
  "price",
  "unit",
  "publisher",
  "comment",
  "ebookPrice",
  "discount",
  "images",
  "sellWay",
];

export const useBookForm = ({ initialBook, bookId }: UseBookFormProps) => {
  const { book, handleChange, initState } = useFormInputs({ initialBook });

  const { mutateBook, isPending } = useUpdateBook({ bookId });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (initState) {
      const mutatedPart = getDifferences(initState, book);

      const props = Object.keys(mutatedPart).reduce(
        (acc: Partial<IBook>, key) => {
          if (validFields.includes(key)) {
            acc[key] = mutatedPart[key];
          }
          return acc;
        },
        {}
      );

      mutateBook(props);
    } else {
      toast.message("초기값 설정에 실패했습니다.");
    }
  };

  return {
    book,
    handleChange,
    handleSubmit,
    isPending,
  };
};
