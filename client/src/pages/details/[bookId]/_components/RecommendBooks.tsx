import { MdArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import ThisCategoryBestList from "./ThisCategoryBestList";

export default function RecommendBooks() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="details-prod-contents__horizontal__recommend-books">
      <div className="details-prod-contents__horizontal__recommend-books__heading">
        <h1>이 분야의 베스트</h1>
        <button onClick={onClick}>
          <span>더보기</span>
          <div className="icon-wrap">
            <MdArrowRight />
          </div>
        </button>
      </div>
      <ThisCategoryBestList />
    </div>
  );
}
