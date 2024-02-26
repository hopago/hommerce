import { useAuth } from "@clerk/clerk-react";

import UserBeforeLoginButton from "./UserBeforeLoginButton";
import UserAfterLoginButton from "./UserAfterLoginButton";

export default function UserButton() {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <UserAfterLoginButton /> : <UserBeforeLoginButton />;
}
