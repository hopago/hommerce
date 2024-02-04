import RecommendGNBList from "./RecommendGNBList";
import { recommendGNBList } from "./constants/category";

export default function RecommendGNB() {
  return (
    <ul className="recommend-gnb">
      {recommendGNBList.map((list) => (
        <RecommendGNBList key={list.text} list={list} />
      ))}
    </ul>
  );
}
