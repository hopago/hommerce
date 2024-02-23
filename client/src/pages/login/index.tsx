import Logo from "../_components/Logo";
import Form from "./_components/Form";
import PersistID from "./_components/PersistID";
import SNSLogin from "./_components/SNSLogin";
import Register from "./_components/Register";
import ShortcutFooter from "../../_components/ShortcutFooter";

import { usePersistId } from "./hooks/use-persist-id";

export default function LoginIndex() {
  const { isPersist, onClick } = usePersistId();

  return (
    <div id="login-page">
      <header>
        <Logo />
      </header>
      <main>
        <section>
          <Form isPersist={isPersist} />
          <PersistID isPersist={isPersist} onClick={onClick} />
          <SNSLogin />
          <Register />
        </section>
      </main>
      <ShortcutFooter />
    </div>
  );
}
