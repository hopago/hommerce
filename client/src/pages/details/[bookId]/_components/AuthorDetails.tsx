import { MdOutlineInfo } from "react-icons/md";

import TagBox from "../../../../_components/TagBox";
import ShowDataToggle from "../../../../_components/ShowDataToggle";
import ReferrerBookItem from "./ReferrerBookItem";

import { useState } from "react";

type AuthorDetailsProps = {
  author: AuthorInfo;
};

export default function AuthorDetails({ author }: AuthorDetailsProps) {
  const preview = author.intro.slice(0, 100);

  const [show, setShow] = useState(false);

  return (
    <div className="details-author-info__horizontal__contents">
      <h1>작가정보</h1>
      <div className="details-author-info__horizontal__contents__inner">
        <div className="title-wrap">
          <div className="author-name">
            <span>저자(글)</span>
            <span>
              <strong>강용수</strong>
            </span>
          </div>
          <button className="details-info-box">
            <MdOutlineInfo className="icon" />
            <span>상세정보</span>
          </button>
        </div>
        <div className="tag-box-wrap">
          <TagBox authorName={author.name} authorJob={author.job} />
        </div>
        <p>{show ? author.intro : preview + "..."}</p>
        <ShowDataToggle show={show} setShow={setShow} />
        <ul>
          {author.books.map((book) => (
            <ReferrerBookItem key={`${book.id}-${book.title}`} book={book} />
          ))}
        </ul>
      </div>
    </div>
  );
}
