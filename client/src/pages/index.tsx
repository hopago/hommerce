import {
  Navbar,
  NewsLetter,
  SearchSection,
  RecommendGNB,
  TodayPick,
  Banner,
  BestAwards,
} from "./_components";

export default function Index() {
  return (
    <>
      <NewsLetter />
      <Navbar />
      <SearchSection />
      <Banner />
      <BestAwards />
      <RecommendGNB />
      <TodayPick />
    </>
  );
}
