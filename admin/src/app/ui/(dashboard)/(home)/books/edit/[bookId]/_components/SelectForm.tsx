import SelectList from "../../../../_components/SelectList";
import SelectInput from "../../../../users/management/[username]/_components/SelectInput";

import { useSelectCategory } from "../hooks/use-select-category";
import { useParentCategoryMutation } from "../services/use-parent-category-mutation";
import { useSellTypeMutation } from "../services/use-sell-type-mutation";

type SelectFormProps = {
  type: "상위 분야" | "책 카테고리" | "판매 방식" | "가격 단위";
  value: BookParentCategory | BookSubCategory | SellType | UnitType;
  bookId: string;
};

const parentCategory: BookParentCategory[] = ["국내도서", "외국도서", "eBook"];

const bookCategory: BookSubCategory[] = [
  "경제 경영",
  "사회 정치",
  "소설",
  "시/에세이",
  "역사",
  "예술",
  "유아",
  "인문",
  "인물",
  "자기 계발",
  "자연과학",
  "종교",
  "현대지성",
];

const sellType: SellType = ["종이책", "eBook", "sam"];

export default function SelectForm({ type, value, bookId }: SelectFormProps) {
  if (type === "책 카테고리") {
    const { show, setShow, category, handleCategory, toggleShow } =
      useSelectCategory({
        initialCategory: value as BookSubCategory,
        bookId,
      });

    return (
      <SelectList
        currSelect={category}
        handleItemClick={handleCategory}
        selectList={bookCategory}
        show={show}
        setShow={setShow}
        handleShow={toggleShow}
      />
    );
  }

  const { mutateBookParentCategory, isPending: isParentCategoryPending } =
    useParentCategoryMutation({
      bookId,
    });

  const { mutateBookSellType, isPending: isSellTypePending } =
    useSellTypeMutation({
      bookId,
    });

  switch (type) {
    case "상위 분야":
      return (
        <SelectInput
          items={parentCategory}
          onClickItem={mutateBookParentCategory}
          isPending={isParentCategoryPending}
          value={value as BookParentCategory}
        />
      );
    case "판매 방식":
      return (
        <SelectInput
          items={sellType}
          onClickItem={mutateBookSellType}
          isPending={isSellTypePending}
          value={value as SellWay}
        />
      );
  }
}
