import { STYLE_NONE_BUTTON } from "../../../../constants/classNames";

import styles from "./update-user-form.module.css";

type SelectInputProps = {
  items: UserGrade[] | UserStatus[];
  onClickItem: any;
  isPending: boolean;
  value: UserGrade | UserStatus;
};

const SelectInput = ({
  items,
  onClickItem,
  isPending,
  value,
}: SelectInputProps) => {
  console.log(value);

  return (
    <div className={styles.select}>
      <ol className={styles.selectList}>
        {items.map((item) => (
          <li key={item} className={styles.selectItem}>
            <button
              className={STYLE_NONE_BUTTON}
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
