import { cn } from "@/app/ui/lib/utils";

import { BUTTON_CLASS } from "../../../../constants/classNames";

import styles from "./update-user-form.module.css";

type SelectInputProps = {
  items: UserGrade[] | UserStatus[] | BookParentCategory[] | SellType;
  onClickItem: any;
  isPending: boolean;
  value: UserGrade | UserStatus | BookParentCategory | SellWay;
};

const SelectInput = ({
  items,
  onClickItem,
  isPending,
  value,
}: SelectInputProps) => {
  return (
    <div className={styles.select}>
      <ol className={styles.selectList}>
        {items.map((item) => (
          <li
            key={item}
            className={cn(styles.selectItem, value === item && styles.active)}
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
        ))}
      </ol>
    </div>
  );
};

export default SelectInput;
