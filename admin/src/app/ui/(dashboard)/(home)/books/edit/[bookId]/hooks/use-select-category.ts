import { useCallback, useEffect, useState } from "react";

export const useSelectCategory = ({
  initialCategory,
}: {
  initialCategory: BookSubCategory;
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const [category, setCategory] = useState<BookSubCategory>(initialCategory);

  const handleCategory = (category: BookSubCategory) => {
    setCategory(category);
  };

  useEffect(() => {
    setShow(false);
  }, [category]);

  return {
    show,
    setShow,
    toggleShow,
    category,
    handleCategory,
  };
};
