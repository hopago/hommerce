type RecommendGNBListProps = {
  list: HeadingCategoryItem;
};

export default function RecommendGNBList({ list }: RecommendGNBListProps) {
  return (
    <li>
      {list.Icon}
      <p>{list.text}</p>
    </li>
  );
}
