
export default function RecommendBookInformationMarketing() {
  return (
    <div className="recommend-books__user__horizontal__marketing">
      <div className="recommend-books__user__horizontal__marketing__text-wrap">
        <span className="desc">나에게 필요한 도서, 기쁨을 선물합니다.</span>
        <div className="info">
          <p>취향을 분석해 꼭 맞는 책을 추천 해드릴게요!</p>
        </div>
      </div>
      {/* if public show */}
      <div className="btn-wrap">
        <button>로그인하고 더 많은 추천 받기</button>
      </div>
    </div>
  );
}
