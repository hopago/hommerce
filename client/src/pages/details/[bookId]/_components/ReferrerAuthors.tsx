import { MdArrowRight } from "react-icons/md";

import { authorsInfo } from "../../../_components/constants/author";
import RefAuthor from "./RefAuthor";

import { useNavigate } from "react-router-dom";

type ReferrerAuthorsProps = {
  authorJob: AuthorType;
};

export default function ReferrerAuthors({ authorJob }: ReferrerAuthorsProps) {
  // TODO: findAuthorsByAuthorJob
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/author/best/${authorJob}`);
  };

  return (
    <div className="details-author-info__horizontal__ref-authors">
      <div className="details-author-info__horizontal__ref-authors__col">
        <div className="details-author-info__horizontal__ref-authors__col__heading">
          <h1>이 분야의 베스트</h1>
          <button onClick={onClick}>
            <span>더보기</span>
            <div className="icon-wrap">
              <MdArrowRight />
            </div>
          </button>
        </div>
        <ul>
          {authorsInfo.map((author) => (
            <RefAuthor key={author.name} author={author} />
          ))}
        </ul>
      </div>
    </div>
  );
}
