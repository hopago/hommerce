import Link from "next/link";

import UserProfile from "./UserProfile";
import Button from "../../_components/Button";

import { getFullDate } from "@/app/ui/lib/utils";

type UserListProps = {
  user: UserInfo;
};

export default function UserList({ user }: UserListProps) {
  return (
    <tr>
      <td>
        <UserProfile imageUrl={user.imageUrl} username={user.username} />
      </td>
      <td>{user.email}</td>
      <td>{getFullDate(user.createdAt)}</td>
      <td>{user.grade}</td>
      <td>{user.status}</td>
      <td>
        <Link href={`/users/${user._id}`}>
          <Button type="button" text="관리하기" className="manage" />
        </Link>
      </td>
    </tr>
  );
}
