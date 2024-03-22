import { useRecoilValue } from "recoil";
import { gnbCategoryState } from "../../../../recoil/use-category";

type BookIntroProps = {
  intro: string;
  awards: string[];
};

export default function BookIntro({ intro, awards }: BookIntroProps) {
  const { parentCategory, category: subCategory } =
    useRecoilValue(gnbCategoryState);

  return (
    <div className="details-prod-contents__horizontal__inner__details-info">
      <div className="details-prod-contents__horizontal__inner__details-info__wrap">
        <div className="title-wrap">
          <p>이 상품이 속한 분야</p>
        </div>
        <div className="intro_sub-text category">
          <span>{parentCategory}</span>
          <span className="divider">&#62;</span>
          <span>{subCategory}</span>
        </div>
        <hr />
        <div className="title-wrap">
          <p>수상내역</p>
        </div>
        <div className="intro_sub-text awards">
          {awards.map((award) => (
            <p key={award}>{award}</p>
          ))}
        </div>
        <hr />
        <div className="intro_sub-text info">{intro}</div>
      </div>
    </div>
  );
}
