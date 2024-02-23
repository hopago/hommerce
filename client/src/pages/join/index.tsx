import { useState } from "react";

import Logo from "../_components/Logo";
import Form from "./_components/Form";
import Heading from "./_components/Heading";
import ShortcutFooter from "../../_components/ShortcutFooter";

export default function SigninIndex() {
  const [currForm, setCurrForm] = useState<0 | 1>(0);

  return (
    <div id="register-page">
      <header>
        <Logo />
      </header>
      <main>
        <section>
          <Heading currForm={currForm} />
          <Form currForm={currForm} setCurrForm={setCurrForm} />
        </section>
      </main>
      <ShortcutFooter />
    </div>
  );
}
