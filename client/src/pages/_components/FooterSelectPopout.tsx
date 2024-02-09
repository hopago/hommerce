import { cn } from "../../lib/utils";

import { forwardRef } from "react";

import { Link } from "react-router-dom";

type FooterSelectPopoutProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

const FooterSelectPopout = forwardRef<HTMLDivElement, FooterSelectPopoutProps>(
  ({ setShow, className }: FooterSelectPopoutProps, ref) => {
    const selectList = [
      {
        text: "hornHub",
        href: "/",
      },
      {
        text: "DevBoard",
        href: "/",
      },
      {
        text: "Taskify",
        href: "/",
      },
    ];

    const handleSelectItemClick = () => {
      setShow(false);
    };

    return (
      <div
        className={cn("popout fade-in-closeUp", className && className)}
        ref={ref}
      >
        <ul
          className={cn(
            "popout__items fade-in-closeUp",
            className && className
          )}
        >
          {selectList.map((list) => (
            <li onClickCapture={handleSelectItemClick} key={list.text}>
              <Link className="link" to={list.href}>
                <span>{list.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default FooterSelectPopout;
