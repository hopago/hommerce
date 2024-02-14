import {
  SearchSection,
  RecommendGNB,
  TodayPick,
  Banner,
  BestAwards,
  Picks,
  AuthorSection,
} from "./_components";

export default function Index() {

  return (
    <>
      <SearchSection />
      <Banner />
      <RecommendGNB />
      <BestAwards />
      <TodayPick />
      <Picks />
      <AuthorSection />
    </>
  );
}
