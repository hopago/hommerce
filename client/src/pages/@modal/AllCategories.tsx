import AllCategoriesParentCategory from "../_components/AllCategories-ParentCategory";
import AllCategoriesSelect from "../_components/AllCategories-Select";
import AllCategoriesSubCategory from "../_components/AllCategories-SubCategory";

export default function AllCategories() {
  return (
    <div className="all-categories">
      <AllCategoriesSelect />
      <AllCategoriesParentCategory />
      <AllCategoriesSubCategory />
    </div>
  );
}
