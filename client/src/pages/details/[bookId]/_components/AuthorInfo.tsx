type AuthorInfoProps = {
  author: string;
};

export default function AuthorInfo({ author }: AuthorInfoProps) {
  // TODO: findAuthorByAuthorName

  return <div>{author}</div>;
}
