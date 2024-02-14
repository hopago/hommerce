type SingleBookHeadingProps = {
  title: string;
};

export default function SingleBookHeading({ title }: SingleBookHeadingProps) {
  return (
    <div className="text-wrap">
      <h1>{title}</h1>
    </div>
  );
}
