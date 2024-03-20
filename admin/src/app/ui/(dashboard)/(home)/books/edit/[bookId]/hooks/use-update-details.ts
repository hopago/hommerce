import { useState } from "react";
import { TextareaFields, TextareaKeys } from "../_components/BookDetailsEdit";
import { updateDetails } from "../services/use-update-details";

type UseUpdateDetailsProps = {
  details: IDetails | undefined;
  field: TextareaKeys;
  bookId: string;
};

export const useUpdateDetails = ({
  details,
  field,
  bookId,
}: UseUpdateDetailsProps) => {
  const initialValue =
    field === "awards"
      ? Array.isArray(details?.[field])
        ? details[field].map((item) => `${item}\n`).join("")
        : ""
      : details?.[field] ?? "";

  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const { handleMutate, isPending } = updateDetails({ bookId });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitValue =
      field === "awards"
        ? value.split("\n").filter((line) => line.trim() !== "")
        : value;

    const body: Partial<TextareaFields> = {
      [field]: submitValue,
    };

    handleMutate({ body });
  };

  return {
    value,
    handleChange,
    handleSubmit,
    isPending,
  };
};
