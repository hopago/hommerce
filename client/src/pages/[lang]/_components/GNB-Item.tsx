import { useNavigate } from "react-router-dom";

type GNBCategoryProps = {
  category: BookParentCategory | BookSubCategory;
  type: "parent" | "sub";
  parentCategory: BookParentCategory | undefined;
};

export default function GNBCategory({
  category,
  type,
  parentCategory,
}: GNBCategoryProps) {
  const navigate = useNavigate();

  const onClick = () => {
    if (type === "parent") {
      navigate(`/${category}`);
    } else {
      navigate(`/category/${parentCategory}/${category}`);
    }
  };

  return (
    <li onClick={onClick}>
      <span>{category}</span>
    </li>
  );
}
