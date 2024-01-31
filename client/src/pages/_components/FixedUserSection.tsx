import { Link } from "react-router-dom";
import { HeartSvg, ProfileOutlineSvg, SearchSvg } from "./constants/Icons";
import { useState } from "react";

export default function FixedUserSection() {
  const [active, setActive] = useState(0);

  const items = [
    {
      icon: <SearchSvg active={active} />,
      text: "둘러보기",
      path: "/",
    },
    {
      icon: <HeartSvg active={active} />,
      text: "위시리스트",
      path: "/wishlist",
    },
    {
      icon: <ProfileOutlineSvg active={active} />,
      text: "로그인",
      path: "/login",
    },
  ];

  return (
    <div className="home-nav-fixed">
      <div className="home-nav-fixed__wrapper">
        <ol>
          {items.map((ele, index) => (
            <li className="home-nav-fixed__wrapper__item" key={ele.text}>
              <Link className="link" to={ele.path}>
                {ele.icon}
                <p style={active === index ? { color: "#4DAC27" } : {}}>
                  {ele.text}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
