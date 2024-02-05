import { linkList } from "./constants/link-list";
import { MdOutlineFormatListBulleted, MdClose } from "react-icons/md";
import GPT4 from "../../assets/openAi.svg";

import { useNavigate } from "react-router-dom";

import AllCategories from "../@modal/AllCategories";

import { useRecoilState } from "recoil";
import { GNBModalState } from "../../recoil/nav-gnb";

export default function NavLinks({ isScrolled }: { isScrolled: boolean }) {
  const navigate = useNavigate();

  const [show, setShow] = useRecoilState(GNBModalState);

  const onClick = (href: string) => {
    if (!href || typeof href !== "string" || href.trim() === "") return;

    navigate(href);
  };

  const toggleModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="search-section__nav-links">
      <div
        className="icon-wrap"
        onClick={toggleModal}
        style={
          show
            ? {
                backgroundColor: "#000000",
                borderColor: "#000000",
                color: "#ffffff",
              }
            : {}
        }
      >
        {show ? <MdClose /> : <MdOutlineFormatListBulleted />}
      </div>
      <div className="search-section__nav-links__wrapper">
        <ol>
          {linkList.map((list) => (
            <li key={list.title}>
              <button
                style={{ color: `${list.color}` }}
                onClick={() => onClick(list.href)}
              >
                {list.title}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div className="right-banner">
        <div className="right-banner__img-wrap">
          <img src={GPT4} alt="right-banner-open-ai" />
        </div>
        <span>
          오픈형 AI GPT-5
          <br />
          연계 서비스
        </span>
      </div>
      {show ? <AllCategories isScrolled={isScrolled} /> : null}
    </div>
  );
}
