import { SearchSection } from "../_components";

import { ADBanner, GNB, SideNavbar, Picks } from "./_components";

export default function LangIndex() {
  return (
    <>
      <SearchSection />
      <GNB />
      <main>
        <SideNavbar />
        <section>
          <ADBanner />
          <Picks />
        </section>
      </main>
    </>
  );
}
