import SelectForm from "../../_components/SelectForm";

import { footerMarkImages } from "./constants/mark-box";
import { footerServiceClause } from "./constants/mark-box";
import { footerPrivateService } from "./constants/mark-box";

export default function FooterMoreInfo() {
  return (
    <div className="footer__body__more-info">
      <div className="img-wrap">
        {footerMarkImages.map((img, i) => (
          <img key={`mark-award-${i}`} src={img} alt="mark-award" />
        ))}
      </div>
      <div className="service-wrap">
        <SelectForm
          direction="top"
          text="이용약관"
          items={footerServiceClause}
        />
        <SelectForm
          direction="top"
          text="개인정보처리방침"
          items={footerPrivateService}
        />
      </div>
    </div>
  );
}
