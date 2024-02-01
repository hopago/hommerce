import RecommendGNBList from "./RecommendGNBList";
import { recommendGNBList } from "./constants/Category";

export default function RecommendGNB() {
  return (
    <ul className="recommend-gnb">
      {recommendGNBList.map((list) => (
        <RecommendGNBList key={list.text} list={list} />
      ))}
    </ul>
  );
}
