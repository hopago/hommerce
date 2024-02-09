import { cn } from "../../lib/utils";

const links = [
  "회사소개",
  "이용약관",
  "개인정보처리방침",
  "청소년보호정책",
  "대량주문안내",
  "협력사여러분",
  "채용정보",
  "광고소개",
];

export default function FooterCompanyInfo() {
  return (
    <div className="footer__body__links">
      <ol>
        {links.map((link, i) => (
          <li key={link}>
            <span
              className={cn("", link === "개인정보처리방침" && "ptService")}
            >
              {link}
            </span>
            {i !== links.length - 1 ? <div className="divider" /> : null}
          </li>
        ))}
      </ol>
      <div className="company-info"></div>
      <p>©&nbsp;HOMMERCE BOOK CENTER</p>
    </div>
  );
}
