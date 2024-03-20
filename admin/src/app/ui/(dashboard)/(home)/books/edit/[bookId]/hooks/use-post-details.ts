import { useState } from "react";
import { postDetails } from "../services/use-post-details";

type UseUpdateDetailsProps = {
  bookId: string;
};

type TextareaFields = Omit<IDetails, "bookId">;

type TextareaKeys = keyof TextareaFields;

export const usePostDetails = ({ bookId }: UseUpdateDetailsProps) => {
  const [field, setField] = useState<Record<TextareaKeys, string>>({
    awards: "",
    bookInside: "",
    bookPublisherReview: "",
    contentsList: "",
    intro: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { handleMutate, isPending } = postDetails({ bookId });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: IDetails = {
      ...field,
      bookId,
      awards: [
        ...field.awards!.split("\n").filter((line) => line.trim() !== ""),
      ],
    };

    handleMutate(payload);
  };

  return {
    field,
    handleChange,
    handleSubmit,
    isPending,
  };
};
