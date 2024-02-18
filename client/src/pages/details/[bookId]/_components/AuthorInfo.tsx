import AuthorDetails from "./AuthorDetails";
import ReferrerAuthors from "./ReferrerAuthors";

import { author } from "../../../_components/constants/author";

type AuthorInfoProps = {
  authorName: string;
};

export default function AuthorInfo({ authorName }: AuthorInfoProps) {
  // TODO: findAuthorByAuthorName

  return (
    <div className="details-author-info">
      <div className="details-author-info__horizontal">
        <AuthorDetails author={author} />
        <ReferrerAuthors authorJob={author.job} />
      </div>
    </div>
  );
}
