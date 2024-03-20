import { TextareaKeys } from "./BookDetailsEdit";

import PostDetailsForm from "./PostDetailsForm";
import UpdateDetailsForm from "./UpdateDetailsForm.tsx";

type BookDetailsFieldProps = {
  keys: TextareaKeys[];
  details: IDetails | undefined;
  isExist: boolean;
};

export default function BookDetailsField({
  keys,
  details,
  isExist,
}: BookDetailsFieldProps) {
  if (isExist) {
    return (
      <>
        {keys.map((field) => (
          <UpdateDetailsForm details={details} field={field} />
        ))}
      </>
    );
  } else {
    return <PostDetailsForm keys={keys} />;
  }
}
