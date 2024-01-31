import { Link } from "react-router-dom";

export default function GNB() {
  const routes = [
    {
      text: "베스트",
      path: "/bestseller",
    },
    {
      text: "신상품",
      path: "/new",
    },
    {
      text: "이벤트",
      path: "/event",
    },
  ]

  return (
    <div className="home-nav__gnb">
      <ol className="home-nav__gnb__wrap">
        {routes.map((ele) => (
          <li key={ele.text}>
            <Link className="link home-nav__gnb__wrap__link" to={ele.path}>
              {ele.text}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
