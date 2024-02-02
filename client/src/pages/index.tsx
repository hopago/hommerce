import {
  Navbar,
  NewsLetter,
  SearchSection,
  RecommendGNB,
  TodayPick,
} from "./_components";
import Banner from "./_components/Banner";
import BestAwards from "./_components/BestAwards";

export default function Index() {
  return (
    <>
      <NewsLetter />
      <Navbar />
      <SearchSection />
      <RecommendGNB />
      <Banner />
      <BestAwards />
      <TodayPick />
    </>
  );
}
