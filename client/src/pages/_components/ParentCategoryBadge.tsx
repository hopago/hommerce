import { setParentCategoryColor } from "../../lib/utils";

type ParentCategoryProps = {
  text: BookParentCategory;
};

export default function ParentCategoryBadge({ text }: ParentCategoryProps) {
  const colorValues = setParentCategoryColor(text);

  if (!colorValues) return null;

  return (
    <div className="category-box">
      <div
        className="category-box__wrapper"
        style={{ backgroundColor: `${colorValues.backgroundColor}` }}
      >
        <span style={{ color: `${colorValues.color}` }}>{text}</span>
      </div>
    </div>
  );
}
