import { useCallback, useEffect, useState } from "react";

import { useSubCategoryMutation } from "../services/use-sub-category-mutation";

import { toast } from "sonner";

type UseSelectCategoryProps = {
  initialCategory: BookSubCategory;
  bookId: string;
};

export const useSelectCategory = ({
  initialCategory,
  bookId,
}: UseSelectCategoryProps) => {
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const [category, setCategory] = useState<BookSubCategory>(initialCategory);

  const handleCategory = (category: BookSubCategory) => {
    setCategory(category);
  };

  const { mutateBookCategory, isPending, isSuccess } = useSubCategoryMutation({
    bookId,
  });

  useEffect(() => {
    if (initialCategory !== category) {
      mutateBookCategory(category);
    }
  }, [category]);

  useEffect(() => {
    if (isPending) {
      toast.message("데이터를 변경 중 입니다. 잠시만 기다려주세요.");
    }
  }, [isPending]);

  useEffect(() => {
    if (isSuccess) {
      setShow(false);
    }
  }, [isSuccess]);

  return {
    show,
    setShow,
    toggleShow,
    category,
    handleCategory,
  };
};
