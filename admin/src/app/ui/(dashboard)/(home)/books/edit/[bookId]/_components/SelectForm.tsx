import SelectList from "../../../../_components/SelectList";
import SelectInput from "../../../../users/management/[username]/_components/SelectInput";

import { useSelectCategory } from "../hooks/use-select-category";

type SelectFormProps = {
  type: "상위 분야" | "책 카테고리" | "판매 방식" | "가격 단위";
  value: BookParentCategory | BookSubCategory | SellType | UnitType;
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

const sellType: SellType = ["eBook", "sam", "종이책"];

export default function SelectForm({ type, value }: SelectFormProps) {
  if (type === "책 카테고리") {
    const { show, setShow, category, handleCategory, toggleShow } =
      useSelectCategory({
        initialCategory: value as BookSubCategory,
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

  switch (type) {
    case "상위 분야":
      return (
        <SelectInput
          items={parentCategory}
          onClickItem={() => {}}
          isPending={false}
          value={value as BookParentCategory}
        />
      );
    case "판매 방식":
      return (
        <SelectInput
          items={sellType}
          onClickItem={() => {}}
          isPending={false}
          value={value as SellWay}
        />
      );
  }
}
