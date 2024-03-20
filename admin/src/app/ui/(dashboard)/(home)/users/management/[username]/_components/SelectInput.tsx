import { cn } from "@/app/ui/lib/utils";

import { BUTTON_CLASS } from "../../../../constants/classNames";

import styles from "./update-user-form.module.css";

import { Skeleton } from "@nextui-org/react";

type TItem = UserGrade | UserStatus | BookParentCategory | SellWay;

type SelectInputProps = {
  items: UserGrade[] | UserStatus[] | BookParentCategory[] | SellType;
  onClickItem: any;
  isPending: boolean;
  value: UserGrade | UserStatus | BookParentCategory[] | SellWay;
};

const SelectInput = ({
  items,
  onClickItem,
  isPending,
  value,
}: SelectInputProps) => {
  const isActive = (item: TItem) =>
    Array.isArray(value)
      ? value.includes(item as BookParentCategory)
      : value === item;

  return (
    <div className={styles.select}>
      <ol className={styles.selectList}>
        {items.map((item) => {
          return (
            <li
              key={item}
              className={cn(styles.selectItem, isActive(item) && styles.active)}
            >
              <button
                type="button"
                className={BUTTON_CLASS.STYLE_NONE}
                onClick={() => onClickItem(item)}
                disabled={isPending}
              >
                <span>{item}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SelectInput;