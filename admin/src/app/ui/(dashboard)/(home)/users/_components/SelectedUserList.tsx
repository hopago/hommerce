import SelectedUserItem from "./SelectedUserItem";

import styles from "./selected-users.module.css";

type SelectedUserProps = {
  usernames: string[];
};

export default function SelectedUserList({ usernames }: SelectedUserProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {usernames.map((name) => (
          <SelectedUserItem key={name} name={name} />
        ))}
      </ul>
    </div>
  );
}
