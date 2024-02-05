import {
  Navbar,
  NewsLetter,
  SearchSection,
  RecommendGNB,
  TodayPick,
  Banner,
  BestAwards,
  Picks,
} from "./_components";

export default function Index() {
  return (
    <>
      <NewsLetter />
      <Navbar />
      <SearchSection />
      <Banner />
      <RecommendGNB />
      <BestAwards />
      <TodayPick />
      <Picks />
    </>
  );
}
