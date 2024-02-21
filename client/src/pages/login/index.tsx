import { SignInButton } from "@clerk/clerk-react";

import Logo from "../_components/Logo";

import { useState } from "react";

export default function LoginIndex() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <main>
        <div className="logo-wrap">
          <Logo />
        </div>
        <div className="input-wrap">

        </div>
        <div className="login-btn-wrap">

        </div>
        <SignInButton>
          ClerkSignIn
        </SignInButton>
      </main>
    </div>
  );
}
