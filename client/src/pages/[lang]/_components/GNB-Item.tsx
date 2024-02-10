type GNBCategoryProps = {
  category: BookParentCategory | BookSubCategory;
};

export default function GNBCategory({ category }: GNBCategoryProps) {
  return (
    <li>
      <span>{category}</span>
    </li>
  );
}
