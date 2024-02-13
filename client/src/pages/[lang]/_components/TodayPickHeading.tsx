
type HeadingProps = {
  title: string | `새로나온 책 | ${BookSubCategory}`;
};

export default function Heading({ title }: HeadingProps) {
  return (
    <div className="text-wrap">
      <h1>{title}</h1>
    </div>
  );
}
