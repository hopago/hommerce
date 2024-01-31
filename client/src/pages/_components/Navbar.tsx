import GNB from "./GNB";
import Logo from "./Logo";
import UserSection from "./UserSection";
import FixedUserSection from "./FixedUserSection";

import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";

export default function Navbar() {
  const matches = useMediaQuery("(min-width:740px)");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (matches) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [matches]);

  return (
    <>
      <nav className="home-nav">
        <Logo />
        <GNB />
        <UserSection />
      </nav>
      {show ? <FixedUserSection /> : null}
    </>
  );
}
