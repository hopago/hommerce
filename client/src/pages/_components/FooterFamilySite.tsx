import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import kakao from "../../assets/kakao.svg";

import Logo from "./Logo";
import FooterSelectPopout from "./FooterSelectPopout";

import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function FooterFamilySite() {
  const selectRef = useRef<HTMLButtonElement>(null);
  const selectListRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const handleSelectFormClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!selectRef.current || !selectListRef.current) return;

      if (
        !selectRef.current.contains(e.target as Node) &&
        !selectListRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className="footer__incite">
      <Logo />
      <div className="footer__incite__logo">
        <button
          ref={selectRef}
          className="footer__incite__logo__family-site"
          onClick={handleSelectFormClick}
        >
          <div className="text">
            <span>Family site</span>
            <MdKeyboardArrowDown className="icon" />
          </div>
        </button>
        {show ? (
          <FooterSelectPopout
            className="footer"
            setShow={setShow}
            show={show}
            ref={selectListRef}
          />
        ) : null}
        <div className="footer__incite__logo__icons">
          <img src={facebook} className="facebook logo" alt="facebook-logo" />
          <img src={youtube} className="youtube logo" alt="youtube-logo" />
          <img src={kakao} className="kakao logo" alt="kakao-logo" />
        </div>
      </div>
    </div>
  );
}
