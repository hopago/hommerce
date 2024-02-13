import { SearchSection } from "../_components";

import {
  ADBanner,
  GNB,
  SideNavbar,
  Picks,
  TrendSearchTerm,
  NewBooks,
} from "./_components";

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
          <TrendSearchTerm />
          <NewBooks bookSubCategory="경제 경영" />
        </section>
      </main>
    </>
  );
}
