import Image from "next/image";

import { IUser } from "../../types/user";

import styles from "./search-results-item.module.css";

import { formatDate } from "../../utils/formatDate";

import { MdAdd } from "react-icons/md";

import { useManageUsers } from "@/app/store/use-manage-users";

type SearchResultItemProps = {
  user: IUser;
};

export default function SearchResultItem({ user }: SearchResultItemProps) {
  const { addUsername } = useManageUsers();

  const onClick = () => addUsername(user.username);

  return (
    <li className={styles.container} onClick={onClick}>
      <Image
        src={user.imageUrl ?? "/img_default-profile.png"}
        alt="user-profile"
        width={24}
        height={24}
        className={styles.userImg}
      />
      <div className={styles.desc}>
        <span>{user.username}</span>
        <span>{formatDate(user.createdAt)}</span>
      </div>
      <MdAdd size={16} />
    </li>
  );
}
