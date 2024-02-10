import { cn } from "../../lib/utils";

import AllCategoriesParentCategory from "../_components/AllCategories-ParentCategory";
import AllCategoriesSelect from "../_components/AllCategories-Select";
import AllCategoriesSubCategory from "../_components/AllCategories-SubCategory";

export default function AllCategories({
  className,
  isScrolled,
}: {
  className?: string;
  isScrolled?: boolean;
}) {
  return (
    <div
      className={cn("all-categories", className && className)}
      style={isScrolled ? { display: "none" } : {}}
    >
      <AllCategoriesSelect />
      <AllCategoriesParentCategory />
      <AllCategoriesSubCategory />
    </div>
  );
}
