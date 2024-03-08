import { MdClose } from "react-icons/md";

import styles from "./selected-users.module.css";

import { useManageUsers } from "@/app/store/use-manage-users";

import { STYLE_NONE_BUTTON } from "../../constants/classNames";

import { cn } from "@/app/ui/lib/utils";

type SelectedUserItemProps = {
  name: string;
};

export default function SelectedUserItem({ name }: SelectedUserItemProps) {
  const { removeUsername } = useManageUsers();

  const onClick = () => {
    removeUsername(name);
  };

  return (
    <li className={styles.item} onClick={onClick}>
      <button className={cn(STYLE_NONE_BUTTON, styles.itemWrap)}>
        <span>{name}</span>
        <MdClose size={16} />
      </button>
    </li>
  );
}
