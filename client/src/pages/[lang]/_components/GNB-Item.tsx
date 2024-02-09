type GNBCategoryProps = {
  category: BookParentCategory | BookSubCategory;
};

export default function GNBCategory({ category }: GNBCategoryProps) {
  return (
    <li>
      <div className="vertical absolute">
        <span>{category}</span>
      </div>
    </li>
  );
}
