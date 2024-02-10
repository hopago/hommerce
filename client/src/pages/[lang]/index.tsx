import { SearchSection } from "../_components";

import { ADBanner, GNB, SideNavbar } from "./_components";

export default function LangIndex() {
  return (
    <>
      <SearchSection />
      <GNB />
      <main>
        <SideNavbar />
        <section>
          <ADBanner />
        </section>
      </main>
    </>
  );
}
