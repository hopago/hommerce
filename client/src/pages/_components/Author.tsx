import { Link } from "react-router-dom";

type AuthorProps = {
  author: AuthorInfoShortcut;
};

export default function Author({ author }: AuthorProps) {
  return (
    <li>
      <Link className="link" to="/">
        <div className="img-wrap">
          <img src={author.img} alt="" />
          <div className="bg" />
        </div>
        <div className="info">
          <div className="text-wrap">
            <span>{author.representBook}</span>
            <p>{author.name}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
