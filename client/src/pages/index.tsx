import {
  Navbar,
  NewsLetter,
  SearchSection,
  RecommendGNB,
  TodayPick,
} from "./_components";

export default function Index() {
  return (
    <>
      <NewsLetter />
      <Navbar />
      <SearchSection />
      <RecommendGNB />
      <TodayPick />
    </>
  );
}
