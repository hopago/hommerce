import { Link } from "react-router-dom";

type RefAuthorProps = {
  author: AuthorInfoShortcut;
};

export default function RefAuthor({ author }: RefAuthorProps) {
  // TODO: author.name -> author.id

  return (
    <li>
      <Link to={`/author/profile/${author.name}`} className="link">
        <div className="img-wrap">
          <img src={author.img} alt={`${author.name}`} />
        </div>
        <div className="info-col">
          <span>{author.name}</span>
          <p>{author.representBook}</p>
        </div>
      </Link>
    </li>
  );
}
