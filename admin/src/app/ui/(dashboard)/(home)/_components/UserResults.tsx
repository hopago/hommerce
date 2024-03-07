import { IUser } from "../types/user";

import styles from "./user-results.module.css";

type UserResultsProps = {
  user: IUser;
};

export default function UserResults({ user }: UserResultsProps) {
  return <li className={styles.userResults}>{user.username}</li>;
}
